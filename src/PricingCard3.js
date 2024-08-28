import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function PricinCard3() {
  return (
    <View style={styles.card}>
      <View style={styles.dotContainer}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <View style={styles.StarIcon}>
    <FontAwesome name="star-o" size={18} color="#895bf1" />
    </View>
       <Text style={styles.planTitle}>Basic Plan</Text>
       <Text style={styles.planTitleText}>Lorem sadipscing elitr, sed diam et</Text>
       <Text style={styles.planTitleText}>nomuny eirmod tempor invidunt ut</Text>
     
      <Text style={styles.price}>$29<Text style={styles.perMonth}>/ month</Text></Text>

      <TouchableOpacity style={styles.Trybutton}>
        <Text style={styles.buttonText}>Try for free 7 days</Text>
      </TouchableOpacity>
      <View style={styles.featuresContainer}>
        {['up to 3 projects', 'unlimited traffic', 'unlimited user access', 'free viewers', '30 days guarantee'].map((feature, index) => (
          <View key={index} style={styles.featureItem}>
           <View style={styles.icon}>
            <FontAwesome name="check" size={18} color="#00C48C" />
            </View>
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Choose Plan</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  featuresContainer: {
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#3E3F5E',
  },
  icon:{
    backgroundColor:"#b9f2e0",
    width:30,
    height:30,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
  },
  card: {
    width: 320,
    borderRadius: 15,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 15,
    elevation: 5,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#895bf1',
    alignItems: 'center',
  },
  Trybutton:{
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#809fb8',
    alignItems: 'center',
    marginBottom:20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 48,
    fontWeight: '700',
    color: '#000',
    marginVertical:10,
    left:-70,
  },
  perMonth: {
    fontSize: 16,
    color: '#A0A3BD',
    marginBottom: 20,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#000',
    left:-90,
  },
  planTitleText:{
    left:-30,
    
  },
  StarIcon:{
    backgroundColor:"#dcccfc",
    justifyContent:"center",
    alignItems:"center",
    width:70,
    height:70,
    borderRadius:50,
    left:-104,
    marginBottom:25,
  },
  dotContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ccc',
    marginHorizontal: 2,
  },
})