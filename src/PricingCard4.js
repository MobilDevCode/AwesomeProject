import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function PlanSelection() {
  const [selectedPlan, setSelectedPlan] = useState('Business Plan');

  const plans = [
    { name: 'Basic Plan', price: '$49,99 / month' },
    { name: 'Standard Plan', price: '$59,99 / month' },
    { name: 'Business Plan', price: '$89,99 / month' },
    { name: 'Experts Plan', price: '$119,99 / month' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Plan</Text>
      {plans.map((plan) => (
        <TouchableOpacity
          key={plan.name}
          style={[
            styles.planContainer,
            selectedPlan === plan.name && styles.selectedPlanContainer,
          ]}
          onPress={() => setSelectedPlan(plan.name)}
        >
          <View style={styles.radioButtonContainer}>
            <View
              style={[
                styles.radioButton,
                selectedPlan === plan.name && styles.radioButtonSelected,
              ]}
            >
              {selectedPlan === plan.name ? (
                <MaterialIcons name="radio-button-checked" size={24} color="#007BFF" />
              ) : (
                <MaterialIcons name="radio-button-unchecked" size={24} color="#007BFF" />
              )}
            </View>
          </View>
          <View style={styles.planTextContainer}>
            <Text style={styles.planPrice}>{plan.price}</Text>
            <Text style={styles.planName}>{plan.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Choose Plan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  planContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedPlanContainer: {
    borderColor: '#007BFF',
    borderWidth: 2,
  },
  radioButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  planTextContainer: {
    flex: 1,
  },
  planPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  planName: {
    fontSize: 14,
    color: '#A0A3BD',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

