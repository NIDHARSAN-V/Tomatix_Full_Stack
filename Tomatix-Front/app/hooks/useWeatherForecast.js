import { useState, useEffect, useCallback } from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

const weatherapi = 'a52ce42073604dd3bbc132923241508'; // Replace with your actual API key

const useWeatherForecast = () => {
  const [forecast, setForecast] = useState(null);           // For current weather
  const [futureWeather, setFutureWeather] = useState([]);   // For future weather
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);   // Capture errors

  const fetchWeatherData = async (lat, lon) => {
    try {
      const currentUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherapi}&q=${lat},${lon}&aqi=no`;
      const forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=${weatherapi}&q=${lat},${lon}&days=7`;

      // Fetch current weather
      const currentResponse = await fetch(currentUrl);
      if (!currentResponse.ok) {
        const errorData = await currentResponse.json();
        throw new Error(errorData.error.message || 'Failed to fetch current weather');
      }
      const currentData = await currentResponse.json();
      
      // Fetch future weather
      const forecastResponse = await fetch(forecastUrl);
      if (!forecastResponse.ok) {
        const errorData = await forecastResponse.json();
        throw new Error(errorData.error.message || 'Failed to fetch future weather');
      }
      const forecastData = await forecastResponse.json();

      setForecast(currentData);
      setFutureWeather(forecastData.forecast.forecastday);
    } catch (error) {
      console.error('Error fetching weather:', error.message);
      setErrorMessage('Unable to fetch weather data');
    }
  };

  const loadForecast = useCallback(async () => {
    setRefreshing(true);
    setLoading(true);
    setErrorMessage(null);  // Reset error message

    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        setErrorMessage('Location permission denied');
        setLoading(false);
        setRefreshing(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
      const lat = location.coords.latitude.toFixed(2);
      const lon = location.coords.longitude.toFixed(2);
      
      await fetchWeatherData(lat, lon);
    } catch (error) {
      console.error('Error fetching location or weather:', error.message);
      setErrorMessage('Failed to fetch location or weather data');
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadForecast();
  }, [loadForecast]);

  return { forecast, futureWeather, loading, refreshing, loadForecast, errorMessage };
};

export default useWeatherForecast;
