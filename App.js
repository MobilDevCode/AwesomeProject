
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CardComp from './src/CardComp';
import App2 from './src/ColumnChart';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Card'>
      <Stack.Screen name="App2" component={App2} />
      <Stack.Screen name="Card" component={CardComp} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;