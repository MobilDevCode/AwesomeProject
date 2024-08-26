import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Rect, Line, Circle } from 'react-native-svg';

const HorizontalBarChartScreen = () => {
  const data = [2400, 2100, 2200, 2500, 2400, 2600, 2550, 2700, 2600];
  const max = Math.max(...data);
  const barHeight = 15;
  const barMargin = 8;

  const totalSales = 5160;
  const increasePercentage = 16.24;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f8f9fa' }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Column Chart</Text>
      <Svg height={data.length * (barHeight + barMargin)} width="100%">
        {data.map((value, index) => {
          const barWidth = (value / max) * 100 + "%";
          return (
            <View key={index}>
              <Rect
                x="0"
                y={index * (barHeight + barMargin)}
                width="100%"
                height={barHeight}
                fill="#e0e0e0"
                rx="10"
                ry="10"
              />
              <Rect
                x="0"
                y={index * (barHeight + barMargin)}
                width={barWidth}
                height={barHeight}
                fill={index % 2 === 0 ? "#4a56e2" : "#3b4bd1"}
                rx="10"
                ry="10"
              />
              <Rect
                x={(value / max) * 100 - 20 + "%"}
                y={index * (barHeight + barMargin)}
                width="20%"
                height={barHeight}
                fill="#4A90E2"
                rx="10"
                ry="10"
              />
            </View>
          );
        })}
      </Svg>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Svg height="40" width="40">
          <Rect x="5" y="5" width="30" height="30" rx="10" ry="10" fill="#E0F7EF" />
          <Line x1="20" y1="15" x2="20" y2="25" stroke="#32a852" strokeWidth="2" />
          <Line x1="20" y1="15" x2="15" y2="20" stroke="#32a852" strokeWidth="2" />
          <Line x1="20" y1="15" x2="25" y2="20" stroke="#32a852" strokeWidth="2" />
        </Svg>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}>$ {totalSales.toLocaleString()}</Text>
          <Text style={{ color: '#8a8d93', marginTop: 5 }}>
            Sale Increases <Text style={{ color: '#32a852' }}>+{increasePercentage}%</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HorizontalBarChartScreen;
