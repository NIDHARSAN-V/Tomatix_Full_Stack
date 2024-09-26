import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

function MarketIntelligence() {
  const [statename, setstatename] = useState('');
  const [tableres, settable] = useState([[]]);
  const [qandares, setqanda] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const states = [
    'Select any One',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry',
  ];

  const handlePickerChange = (val) => {
    setstatename(val);
  };

  const Table = ({ data }) => {
    return (
      <View style={styles.tableContainer}>
        {data.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, cellIndex) => (
              <Text
                key={cellIndex}
                style={[styles.cell, rowIndex === 0 ? styles.headerCell : styles.dataCell]}
              >
                {cell}
              </Text>
            ))}
          </View>
        ))}
      </View>
    );
  };

  const QandA = ({ qandares }) => {
    return (
      <View style={styles.qandaContainer}>
        <Text style={styles.text}>Frequently Asked Questions:</Text>
        {qandares.map((item, index) => (
          <View key={index} style={styles.qandaItem}>
            <Text style={styles.qandaQuestion}>{item.q}</Text>
            <Text style={styles.qandaAnswer}>{item.a}</Text>
          </View>
        ))}
      </View>
    );
  };

  const handleSubmit = async () => {
    if (!statename || statename === 'Select any One') {
      setError('Please select a valid state.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        'http://192.168.206.114:5501/getmarketintelligence',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ statename }),
        }
      );
      const res = await response.json();

      settable(res.table || [[]]);
      setqanda(res.qanda || []);
      console.log("Response data:", res.data);
    } catch (error) {
      setError('Failed to fetch data. Please try again.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.outerContainer}>
      <StatusBar backgroundColor="#007bff" barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.text1}>Tomatix</Text>
        <Text style={styles.text}>Select The State</Text>
      </View>
      <Picker style={styles.picker} selectedValue={statename} onValueChange={handlePickerChange}>
        {states.map((statex, i) => (
          <Picker.Item key={i} label={statex} value={statex} />
        ))}
      </Picker>
      <Button title="Submit" onPress={handleSubmit} />
      {loading && <ActivityIndicator style={styles.loader} size={60} color="#007bff" />}
      {error && <Text style={styles.error}>{error}</Text>}
      {!loading && tableres.length > 0 && (
        <ScrollView style={styles.innerContainer}>
          {tableres.map((tableData, tableIndex) => (
            <View key={tableIndex} style={styles.tableWrapper}>
              <ScrollView horizontal={true} style={styles.horizontalScroll}>
                <Table data={tableData} />
              </ScrollView>
            </View>
          ))}

          {qandares.length > 0 && <QandA qandares={qandares} />}
        </ScrollView>
      )}
    </ScrollView>
  );
}

export default MarketIntelligence;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#fff',
    flexGrow: 1,
    padding: 10,
  },
  container: {
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    width: '100%',
  },
  text: {
    color: 'red',
    marginTop: 70,
    fontSize: 20,
  },
  text1: {
    color: 'green',
    marginTop: 50,
    fontSize: 30,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  tableWrapper: {
    marginBottom: 20,
  },
  horizontalScroll: {
    marginBottom: 10,
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: 'grey',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 150,
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
  },
  headerCell: {
    backgroundColor: '#ddd',
    fontWeight: 'bold',
  },
  dataCell: {
    backgroundColor: '#fff',
  },
  qandaContainer: {
    marginTop: 20,
  },
  qandaItem: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  qandaQuestion: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  qandaAnswer: {
    marginLeft: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  loader : {
    padding:100,
    
  }
});
