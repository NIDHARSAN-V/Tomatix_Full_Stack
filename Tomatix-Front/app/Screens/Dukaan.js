import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, SafeAreaView, ScrollView, TextInput, ActivityIndicator, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import { useTranslation } from 'react-i18next';
import '../Components/Language/language';

// TomatoView Component
function TomatoView({ navigation }) {
  const [tomatoes, setTomatoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const {t,i18n} = useTranslation();

  const fetchTomatoes = async () => {
    try {
      const response = await fetch('https://tomatix-backend-1.onrender.com/tomatoes');
      const data = await response.json();
      setTomatoes(data);
    } catch (error) {
      console.error('Failed to fetch tomatoes:', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchTomatoes();
    }, [])
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <Pressable style={styles.button} onPress={() => navigation.navigate('TomatoAdd')}>
        <Text style={styles.buttonText}>{t('sellTomatoes')}</Text>
      </Pressable>
      {loading ? (
        <ActivityIndicator size="large" color="#ff6347" />
      ) : (
        <ScrollView style={styles.content}>
          {tomatoes.length ? (
            tomatoes.map((i, index) => (
              <View key={index} style={styles.tomatoCard}>
                <Text style={styles.tomatoName}>{i.TomatoName}</Text>
                <Text>{i.quantity} {t('kg')}</Text>
                <Text>{t('rs')}. {i.price} /{t('kg')}</Text>
                <Text>{i.state}</Text>
                <Text>{i.contact}</Text>
              </View>
            ))
          ) : (
            <Text>{t('noTomato')}</Text>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

// TomatoAdd Component
function TomatoAdd({ navigation }) {
  const [tomatoName, setTomatoName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [state, setState] = useState('Tamil Nadu');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
  const {t,i18n} = useTranslation();

  const submitTomato = async () => {
    if (!tomatoName || !quantity || !price || !contact) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    const tomatoData = { TomatoName: tomatoName, quantity: parseInt(quantity), price: parseInt(price), state, contact };
    try {
      const response = await fetch('https://tomatix-backend-1.onrender.com/tomatoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tomatoData),
      });
      const result = await response.json();
      if (response.ok) {
        Alert.alert('Success', 'Tomato added successfully', [
          { text: 'OK', onPress: () => navigation.goBack() },
        ]);
      } else {
        Alert.alert('Error', result.error || 'Failed to add tomato');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to add tomato');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <Text style={styles.boldText}>{t('bigOrders')}</Text>
      <Text>{t('tomatoOrderName')}</Text>
      <TextInput style={styles.input} value={tomatoName} onChangeText={setTomatoName} />
      <Text>{t('quantity')}</Text>
      <TextInput style={styles.input} value={quantity} onChangeText={setQuantity} keyboardType="numeric" />
      <Text>{t('pricePerKg')}</Text>
      <TextInput style={styles.input} value={price} onChangeText={setPrice} keyboardType="numeric" />
      <Text>{t('state')}</Text>
      <Picker selectedValue={state} onValueChange={(itemValue) => setState(itemValue)} style={styles.input}>
        <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
        <Picker.Item label="Kerala" value="Kerala" />
        <Picker.Item label="Karnataka" value="Karnataka" />
        <Picker.Item label="Maharashtra" value="Maharashtra" />
      </Picker>
      <Text>{t('contact')}</Text>
      <TextInput style={styles.input} value={contact} onChangeText={setContact} keyboardType="numeric" />
      {loading ? (
        <ActivityIndicator size="large" color="#ff6347" />
      ) : (
        <Pressable style={styles.button} onPress={submitTomato}>
          <Text style={styles.buttonText}>{t('submit')}</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}

// FertilizerView Component
function FertilizerView({ navigation }) {
  const [fertilizers, setFertilizers] = useState([]);
  const [loading, setLoading] = useState(true);
  const {t,i18n} = useTranslation();

  const fetchFertilizers = async () => {
    try {
      const response = await fetch('https://tomatix-backend-1.onrender.com/fertilizers');
      const data = await response.json();
      setFertilizers(data);
    } catch (error) {
      console.error('Failed to fetch fertilizers:', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchFertilizers();
    }, [])
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <Pressable style={styles.button} onPress={() => navigation.navigate('FertilizerAdd')}>
        <Text style={styles.buttonText}>{t('addFertilizer')}</Text>
      </Pressable>
      {loading ? (
        <ActivityIndicator size="large" color="#32cd32" />
      ) : (
        <ScrollView style={styles.content}>
          {fertilizers.length ? (
            fertilizers.map((f, index) => (
              <View key={index} style={styles.fertilizerCard}>
                <Text style={styles.fertilizerName}>{f.fertilizerName}</Text>
                <Text>{f.description}</Text>
                <Text>{f.state}</Text>
                <Text>{f.contact}</Text>
              </View>
            ))
          ) : (
            <Text>{t('noFertilizer')}</Text>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

// FertilizerAdd Component
function FertilizerAdd({ navigation }) {
  const [fertilizerName, setFertilizerName] = useState('');
  const [description, setDescription] = useState('');
  const [state, setState] = useState('Tamil Nadu');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
  const {t,i18n} = useTranslation();

  const submitFertilizer = async () => {
    if (!fertilizerName || !description || !contact) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    const fertilizerData = { fertilizerName, description, state, contact };
    try {
      const response = await fetch('https://tomatix-backend-1.onrender.com/fertilizers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fertilizerData),
      });
      const result = await response.json();
      if (response.ok) {
        Alert.alert('Success', 'Fertilizer added successfully', [
          { text: 'OK', onPress: () => navigation.goBack() },
        ]);
      } else {
        Alert.alert('Error', result.error || 'Failed to add fertilizer');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to add fertilizer');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <Text style={styles.boldText}>{t('addFertilizer')}</Text>
      <Text>{t('fertilizerName')}</Text>
      <TextInput style={styles.input} value={fertilizerName} onChangeText={setFertilizerName} />
      <Text>{t('description')}</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />
      <Text>{t('state')}</Text>
      <Picker selectedValue={state} onValueChange={(itemValue) => setState(itemValue)} style={styles.input}>
        <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
        <Picker.Item label="Kerala" value="Kerala" />
        <Picker.Item label="Karnataka" value="Karnataka" />
        <Picker.Item label="Maharashtra" value="Maharashtra" />
      </Picker>
      <Text>{t('contact')}</Text>
      <TextInput style={styles.input} value={contact} onChangeText={setContact} keyboardType="numeric" />
      {loading ? (
        <ActivityIndicator size="large" color="#32cd32" />
      ) : (
        <Pressable style={styles.button} onPress={submitFertilizer}>
          <Text style={styles.buttonText}>{t('submit')}</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  tomatoCard: {
    backgroundColor: '#ffe4e1',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  tomatoName: {
    fontWeight: 'bold',
  },
  fertilizerCard: {
    backgroundColor: '#e6ffe6',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  fertilizerName: {
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 10,
    maxHeight:'65%',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 10,
  },
});

export { TomatoView, TomatoAdd, FertilizerView, FertilizerAdd };
