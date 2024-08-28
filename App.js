
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VerticalBarChartScreen from './src/VerticalBarChartScreen';
import CardComp from './src/CardComp';
import App2 from './src/ColumnChart';
import HorizontalBarChartScreen from './src/HorizontalBarChartScreen';
import PricingCard from './src/PricingCard';
import HomeScreen from './src/HomeScreen';
import PricingCard2 from './src/PricingCard2';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
   
      <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PricingCard2" component={PricingCard2} />
      <Stack.Screen name="App2" component={App2} />
      <Stack.Screen name="Card" component={CardComp} />
      <Stack.Screen name="VerticalBarChartScreen" component={VerticalBarChartScreen} />
      <Stack.Screen name="HorizontalBarChartScreen" component={HorizontalBarChartScreen} />      
      <Stack.Screen name="PricingCard" component={ PricingCard} />
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

export default App;