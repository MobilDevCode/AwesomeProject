
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VerticalBarChartScreen from './src/VerticalBarChartScreen';
import CardComp from './src/CardComp';
import App2 from './src/ColumnChart';
import HorizontalBarChartScreen from './src/HorizontalBarChartScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Button" component={ButtonComp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;