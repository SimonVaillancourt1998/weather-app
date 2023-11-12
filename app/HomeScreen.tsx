// In HomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleCheckWeather = () => {
    navigation.navigate('Weather' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Weather App!</Text>
      <Button
        title="Check Weather"
        onPress={handleCheckWeather}
        color="#007AFF" // Optional: Change button color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
