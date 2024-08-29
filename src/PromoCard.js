import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

const { width } = Dimensions.get('window');
const circleSize = 100;
const strokeWidth = 10;
const radius = (circleSize - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;

export default function MarketingGoalCard() {
  const progress = 0.68; // 68% progress

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Marketing goal for the past year</Text>
          <Text style={styles.amount}>$4,520.00</Text>
          <Text style={styles.subText}>You reached</Text>
          <Text style={styles.goal}>$4,520.00 / $8,000.00</Text>
        </View>
        <View style={styles.svgContainer}>
          <Svg width={circleSize} height={circleSize}>
            <G rotation="-90" origin={`${circleSize / 2}, ${circleSize / 2}`}>
              <Circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke="#0096FF"
                strokeWidth={strokeWidth}
                fill="transparent"
              />
              <Circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke="#fff"
                strokeWidth={strokeWidth}
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - progress * circumference}
              />
            </G>
          </Svg>
          <View style={styles.progressTextContainer}>
            <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    backgroundColor: '#007BFF',
    borderRadius: 15,
    padding: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  amount: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: '#D0D4DB',
  },
  goal: {
    fontSize: 14,
    color: '#D0D4DB',
    fontWeight: 'bold',
  },
  svgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressTextContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: circleSize,
    height: circleSize,
  },
  progressText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
