import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Animated } from 'react-native';

const App = ({ onPress }) => {
  const [scaleValue] = useState(new Animated.Value(1));

  const handlePress = (pressed) => {
    Animated.spring(scaleValue, {
      toValue: pressed ? 0.9 : 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
    if (!pressed && onPress) onPress();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <TouchableOpacity
          style={styles.button}
          onPressIn={() => handlePress(true)}
          onPressOut={() => handlePress(false)}
        >
          <Text style={styles.buttonText}>Click me!</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  button: {
    backgroundColor: '#ff6f61',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
