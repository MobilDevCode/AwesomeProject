import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PricingCard = () => {
  const [activePlan, setActivePlan] = useState('Monthly');
  const animatedValue = useRef(new Animated.Value(0)).current;

  const togglePlan = (plan) => {
    if (plan === activePlan) return;

    Animated.timing(animatedValue, {
      toValue: plan === 'Monthly' ? 0 : 1,
      duration: 250,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start(() => {
      setActivePlan(plan);
    });
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-60, 60], // Kayma mesafesi, genişlik ayarlandı
  });

  return (
    <View style={styles.card}>
      <Text style={styles.planTitle}>Basic Plan</Text>
      <View style={styles.switchContainer}>
        <Animated.View style={[styles.switchBackground, { transform: [{ translateX }] }]} />
        <TouchableOpacity
          style={styles.switchButton}
          onPress={() => togglePlan('Monthly')}
        >
          <Text style={activePlan === 'Monthly' ? styles.switchTextActive : styles.switchText}>
            Monthly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.switchButton}
          onPress={() => togglePlan('Annual')}
        >
          <Text style={activePlan === 'Annual' ? styles.switchTextActive : styles.switchText}>
            Annual
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.price}>$29<Text style={styles.perMonth}>/ month</Text></Text>
      
      <View style={styles.featuresContainer}>
        {['up to 3 projects', 'unlimited traffic', 'unlimited user access', 'free viewers', '30 days guarantee'].map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <FontAwesome name="check-circle" size={18} color="#00C48C" />
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>
        
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Choose Plan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  planTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#000',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Ortalanmış hizalama
    width: '90%',
    marginBottom: 20,
    backgroundColor: '#F0F1F5',
    borderRadius: 25,
    padding: 5,
    position: 'relative',
  },
  switchBackground: {
    position: "absolute",
    width: '50%', // Genişlik %50 olarak ayarlandı
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    justifyContent: 'flex-start', flexDirection: 'row',
    alignContent:"flex-start",
    alignSelf:"center"
  },
  switchButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  switchTextActive: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007BFF',
  },
  switchText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#A0A3BD',
  },
  price: {
    fontSize: 48,
    fontWeight: '700',
    color: '#000',
    marginVertical:10,
  },
  perMonth: {
    fontSize: 16,
    color: '#A0A3BD',
    marginBottom: 20,
  },
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
});

export default PricingCard;
