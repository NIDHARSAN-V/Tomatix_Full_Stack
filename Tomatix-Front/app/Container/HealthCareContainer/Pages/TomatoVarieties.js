import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, Dimensions, Platform } from 'react-native';
import { Divider, Searchbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const varieties = [
  { name: 'Arka Saurabh', screen: 'Arka Saurabh', image: require('../Images/Arka Saurabh.png') },
  { name: 'Arka Vikas', screen: 'Arka Vikas', image: require('../Images/Arka Vikas.png') },
  { name: 'Beefsteak Tomato', screen: 'Beefsteak Tomato', image: require('../Images/Beefsteak Tomato.png') },
  { name: 'Black Tomato', screen: 'Black Tomato', image: require('../Images/Black Tomato.png') },
  { name: 'Campari Tomato', screen: 'Campari Tomato', image: require('../Images/Campari Tomato.png') },
  { name: 'Cherry Tomato', screen: 'Cherry Tomato', image: require('../Images/Cherry Tomato.png') },
  { name: 'CO-3', screen: 'CO-3', image: require('../Images/CO-3.png') },
  { name: 'Grape Tomato', screen: 'Grape Tomato', image: require('../Images/Grape Tomato.png') },
  { name: 'Green Tomato', screen: 'Green Tomato', image: require('../Images/Green Tomato.png') },
  { name: 'Heirloom Tomato', screen: 'Heirloom Tomato', image: require('../Images/Heirloom Tomato.png') },
  { name: 'Paiyur 1', screen: 'Paiyur 1', image: require('../Images/Paiyur 1.png') },
  { name: 'PAU-2372', screen: 'PAU-2372', image: require('../Images/PAU-2372.png') },
  { name: 'Pb. Kesari', screen: 'Pb. Kesari', image: require('../Images/Pb. Kesari.png') },
  { name: 'Punjab Chhuhara', screen: 'Punjab Chhuhara', image: require('../Images/Punjab Chhuhara.png') },
  { name: 'Pusa Early Dwarf', screen: 'Pusa Early Dwarf', image: require('../Images/Pusa Early Dwarf.png') },
  { name: 'Pusa Hybrid 4', screen: 'Pusa Hybrid 4', image: require('../Images/Pusa Hybrid 4.png') },
  { name: 'Pusa Hybrid 8', screen: 'Pusa Hybrid 8', image: require('../Images/Pusa Hybrid 8.png') },
  { name: 'Pusa Rohini', screen: 'Pusa Rohini', image: require('../Images/Pusa Rohini.png') },
  { name: 'Pusa Sadabahar', screen: 'Pusa Sadabahar', image: require('../Images/Pusa Sadabahar.jpg') },
  { name: 'Pusa Upahar', screen: 'Pusa Upahar', image: require('../Images/Pusa Upahar.png') },
  { name: 'Roma Tomato', screen: 'Roma Tomato', image: require('../Images/Roma Tomato(Plum Tomato).png') },
  { name: 'San Marzano', screen: 'San Marzano', image: require('../Images/San Marzano Tomato.png') },
  { name: 'Sioux', screen: 'Sioux', image: require('../Images/Sioux.png') },
  { name: 'Yellow Tomato', screen: 'Yellow Tomato', image: require('../Images/Yellow and Orange Tomato.png') },
];

const TomatoVarieties = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVarieties, setFilteredVarieties] = useState(varieties);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    setFilteredVarieties(
      varieties.filter((variety) =>
        variety.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
        <View style={styles.itemsContainer}>
          {filteredVarieties.map((variety, index) => (
            <View key={index} style={styles.itemWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate(variety.screen)}>
                <Image source={variety.image} style={styles.image} />
                <Text style={styles.text}>{variety.name}</Text>
              </TouchableOpacity>
              <Divider />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get('window');
const imageSize = Platform.OS === 'web' ? width * 0.17 : width * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchbar: {
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  itemWrapper: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default TomatoVarieties;