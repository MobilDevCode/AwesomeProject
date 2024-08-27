import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated,Button, Image, TouchableOpacity } from 'react-native';

const CubeComp = ({navigation}) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [animation] = useState(new Animated.Value(0));
  const [isCardOpen, setIsCardOpen] = useState(false);

  const cards = [
    { id: 1, title: 'Card 1', description: 'This is the description of the card.', color: 'red', image: require('../image/logo1.png') },
    { id: 2, title: 'Card 2', description: 'This is the description of the card.', color: 'green', image: require('../image/logo1.png') },
    { id: 3, title: 'Card 3', description: 'This is the description of the card.', color: 'blue', image: require('../image/logo1.png') },
  ];

  const handlePress = (id) => {
    if (selectedCard === id && isCardOpen) {
      // If the card is already open, animate it back to the original position
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setSelectedCard(null);
        setIsCardOpen(false);
      });
    } else {
      // Animate the card out of the screen and then back in
      setSelectedCard(id);
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 2,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setIsCardOpen(true);
      });
    }
  };

  const translateX = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, -300, 0], // The card moves left and then back
  });

  const translateY = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, -50, -100], // The card first moves up, then down as it scales
  });

  const scale = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 0.5, 1.5], // The card first shrinks, then enlarges
  });

  return (
    
    <View style={styles.wrapper}>
      
      {cards.map((card, index) => (
        <TouchableWithoutFeedback key={card.id} onPress={() => handlePress(card.id)}>
          <Animated.View
            style={[
              styles.card,
              {
                backgroundColor: card.color,
                transform: [
                  { rotateY: `${index * -5}deg` },  // Slight rotation for 3D effect
                  { translateX: index * 20 },       // Initial X-axis offset
                  { translateY: index * 10 },       // Initial Y-axis offset
                ],
                zIndex: selectedCard === card.id ? 100 : 0, // Bring the selected card to the front
              },
              selectedCard === card.id && {
                transform: [
                  { translateX }, 
                  { translateY },
                  { scale }
                ],
              },
            ]}
          >
            <Image source={card.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardDescription}>{card.description}</Text>
            
          </Animated.View>
          
        </TouchableWithoutFeedback>
      ))}
      <View style={{backgroundColor:"white",marginBottom:600}}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000', // Set background color to black
    perspective: 1000,       // Perspective for depth effect
  },
  card: {
    width: 150,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',    // Position cards on top of each other
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    padding: 10,
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});

export default CubeComp;
