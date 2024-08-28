import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-vector-icons/Icon';
import FontAwesome from "react-native-vector-icons/FontAwesome"

export default function PricingCard2() {
  return (
    <View style={styles.container}>
      <Text style={styles.priceText}>$59<Text style={styles.perMonth}>/ month</Text></Text>
      <View style={styles.contentContainer}>
        <View style={styles.contentRow}>
          <View style={styles.contentBox}>
          <View style={styles.icon}>
            <FontAwesome name="check" size={18} color="#00C48C" />
            </View>
            <Text style={styles.contentText}>Up to 3 Projects</Text>
          </View>
          <View style={styles.contentBox}>
          <View style={styles.icon}>
            <FontAwesome name="check" size={18} color="#00C48C" />
            </View>
            <Text style={styles.contentText}>Unlimited Options</Text>
          </View>
        </View>
        <View style={styles.contentRow}>
          <View style={styles.contentBox}>
            <View style={styles.icon}>
            <FontAwesome name="check" size={18} color="#00C48C" />
            </View>
          
            <Text style={styles.contentText}>Unlimited Trafic</Text>
          </View>
          <View style={styles.contentBox}>
          <View style={styles.icon}>
            <FontAwesome name="check" size={18} color="#00C48C" />
            </View>
            <Text style={styles.contentText}>Unlimited Users</Text>
          </View>

         
        </View>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Choose Plan</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#fff',
  },
  priceText: {
    fontSize: 50,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contentContainer: {
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
    flex:1
  },
  contentBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  contentText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  perMonth: {
    fontSize: 16,
    color: '#A0A3BD',
    marginBottom: 20,
  },
  icon:{
    backgroundColor:"#b9f2e0",
    width:30,
    height:30,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
  },
});
