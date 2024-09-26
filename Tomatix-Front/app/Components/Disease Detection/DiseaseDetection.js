import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; 
import { Platform } from 'react-native';

const DiseaseDetection = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [base64Image, setBase64Image] = useState(null);

  const requestPermission = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'We need access to your media library to select an image.');
      }
    }
  };

  const chooseImage = async () => {
    await requestPermission(); 
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        base64: true,
      });

      if (!result.canceled) {
        setImageUrl(result.assets[0].uri);
        setBase64Image(result.assets[0].base64); 
        uploadImage(result.assets[0].base64); 
      }
    } catch (error) {
      console.error('Error selecting image:', error);
      Alert.alert('Error', 'There was an issue selecting the image.');
    }
  };

  const uploadImage = async (base64Image) => {
    const apiUrl = 'http://192.168.206.201:5000/predict'; 
    const base64Data = `data:image/jpeg;base64,${base64Image}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: base64Data }),
      });

      if (response.ok) {
        const result = await response.json();
        setPrediction(result.prediction);
      } else {
        console.error('Server error:', response.status);
        Alert.alert('Server Error', `Failed to get prediction: ${response.status}`);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert('Error', 'Failed to upload image or get prediction.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TOMATIX</Text>
      <Text style={styles.subheader}>Disease Detection</Text>

      <Button title="Choose Image" onPress={chooseImage} />

      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}

      {prediction && <Text style={styles.prediction}>Prediction: {prediction}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 24,
    color: '#555',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginVertical: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  prediction: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export  { DiseaseDetection };
