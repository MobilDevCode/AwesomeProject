import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

const chartWidth = 300; 
const chartHeight = 100; 
const data = [70, 50, 60, 45, 65, 55, 75];
const labels = ['Mo', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const totalValue = data.reduce((acc, val) => acc + val, 0); 
const percentageIncrease = 12.96 / 100; 
const totalWithIncrease = totalValue + totalValue * percentageIncrease; 
const maxData = 100;

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Column Chart</Text>
      <View style={styles.chartContainer}>
        {data.map((value, index) => {
          const barHeight = (value / maxData) * chartHeight;
          const greyBarHeight = chartHeight * 0.8;
          return (
            <View key={`bar-${index}`} style={styles.barContainer}>
              <Svg height={chartHeight} width={(chartWidth / data.length)}>
                <Rect
                  x="10"
                  y={chartHeight - greyBarHeight}
                  width="20"
                  height={greyBarHeight}
                  rx={5}
                  ry={5}
                  fill="#e0e0e0"
                />
                <Rect
                  x="10"
                  y={chartHeight - barHeight}
                  width="20"
                  height={barHeight}
                  rx={5}
                  ry={5}
                  fill="#007bff"
                />
              </Svg>
              <Text style={styles.label}>{labels[index]}</Text> 
            </View>
          );
        })}
      </View>
      <View style={styles.footer}>
        <Text style={styles.totalText}>${totalWithIncrease.toFixed(2)}</Text> 
        <Text style={styles.percentage}>+12.96 %</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    width: chartWidth,
    margin: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: chartWidth,
  },
  barContainer: {
    alignItems: 'center',
  },
  label: {
    marginTop: 4,
    fontSize: 8,
    color: '#8c8c8c',
  },
  footer: {
    marginTop: 5,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  percentage: {
    fontSize: 10,  
    color: '#28a745',
  },
});
