import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
      <Button title='Card Componenet' onPress={()=>(navigation.navigate("Card"))}></Button>
      <Button title='Vertical Bar Chart Screen' onPress={()=>(navigation.navigate("VerticalBarChartScreen"))}></Button>
      <Button title='Horizontal Bar Chart Screen' onPress={()=>(navigation.navigate("HorizontalBarChartScreen"))}></Button>
      <Button title='Pricing Card' onPress={()=>(navigation.navigate("PricingCard"))}></Button>
      <Button title='App2' onPress={()=>(navigation.navigate("App2"))}></Button>
      <Button title='Pricing Card2' onPress={()=>(navigation.navigate("PricingCard2"))}></Button>
      <Button title='Pricing Card3' onPress={()=>(navigation.navigate("PricingCard3"))}></Button>
      <Button title='Pricing Card4' onPress={()=>(navigation.navigate("PricingCard4"))}></Button>
      <Button title='Promo Card' onPress={()=>(navigation.navigate("PromoCard"))}></Button>
      <Button title='Screen Design' onPress={()=>(navigation.navigate("ScreenDesign"))}></Button>
      <Button title='Screen Design2' onPress={()=>(navigation.navigate("ScreenDesign2"))}></Button>

    </View>
  )
}