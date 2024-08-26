import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Svg, Rect } from 'react-native-svg';

const VerticalBarChartScreen = ({navigation}) => {
  const data = [1200, 1700, 1500, 2000, 1800, 1600, 1700, 1900, 1750];
  const max = Math.max(...data);
  const barWidth = 20;
  const barMargin = 5;

  const totalSales = data.reduce((acc, value) => acc + value, 0);
  const target = 2800 * data.length;

  return (
    <View style={{flex:1}}>
        <TouchableOpacity style={{borderWidth:1, }} onPress={()=>(navigation.navigate("HorizontalBarChartScreen"))}>
            <Text>GO</Text>
        </TouchableOpacity>
   
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Column Chart</Text>
      <Svg height="100" width={(barWidth + barMargin) * data.length}>
        {data.map((value, index) => {
          const barHeight = (value / max) * 100;
          return (
            <View key={index}>
              <Rect
                x={index * (barWidth + barMargin)}
                y={0}
                width={barWidth}
                height={100}
                fill="#e0e0e0"
                rx="3"
                ry="3"
              />
              <Rect
                x={index * (barWidth + barMargin)}
                y={100 - barHeight}
                width={barWidth}
                height={barHeight}
                fill="#4a56e2"
                rx="3"
                ry="3"
              />
            </View>
          );
        })}
      </Svg>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{totalSales.toLocaleString()}</Text>
      <Text>/{target.toLocaleString()} target</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
        <View style={{ width: 10, height: 10, backgroundColor: '#4a56e2', marginRight: 5 }} />
        <Text>Marketing Sales</Text>
      </View>
    </View>
    </View>
  );
};

export default VerticalBarChartScreen;
