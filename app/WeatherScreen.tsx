// In WeatherScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

const WeatherScreen: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const API_KEY = 'b8e09afa3f3b4ec5a84bde93a35ede1b'; // Remplacez 'VOTRE_CLÉ_API_OPENWEATHERMAP' par votre propre clé API

  const fetchWeather = async () => {

    const api_call = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    console.log(api_call)
    try {
      const response = await axios.get(
        api_call
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données météorologiques :', error);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeather();
    }
  }, [city]);

  return (
    <View>
      <TextInput
        placeholder="Enter city name"
        onChangeText={(text) => setCity(text)}
      />
      <Button title="Get Weather" onPress={fetchWeather} />
      {weather && (
        <View>
          <Text>City: {weather?.name}</Text>
          <Text>Temperature: {weather?.main.temp}°C</Text>
          <Text>Weather: {weather?.weather[0]?.description}</Text>
        </View>
      )}
    </View>
  );
};

export default WeatherScreen;
