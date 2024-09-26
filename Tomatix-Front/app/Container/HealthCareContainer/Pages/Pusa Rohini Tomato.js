import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const PusaRohiniTomato = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Pusa Rohini</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Suitable Soil:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Type: Pusa Rohini tomatoes grow best in well-drained loamy soils that are rich in organic matter.</Text>
          <Text style={styles.listItem}>pH: The ideal soil pH is between 6.0 and 7.0, slightly acidic to neutral. Soil pH outside this range can be adjusted with lime (to increase pH) or sulfur (to decrease pH).</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Temperature:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Optimal Growing Temperature: Tomatoes thrive in temperatures ranging from 20°C to 30°C. Pusa Rohini is relatively tolerant to varying temperatures, but extreme cold or heat can reduce yield and fruit quality.</Text>
          <Text style={styles.listItem}>Frost Sensitivity: Like all tomato varieties, Pusa Rohini is sensitive to frost. Protective measures should be taken if unexpected frost is forecasted.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Season and Planting Months:</Text>
        <Text style={styles.paragraph}>Ideal Planting Time:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>In northern India: February-March for summer cropping and June-July for the winter crop.</Text>
          <Text style={styles.listItem}>In southern India: The planting can often extend over more months due to more moderate temperatures.</Text>
        </View>
        <Text style={styles.paragraph}>Harvesting: Typically, tomatoes take about 60-90 days from transplanting to harvest, depending on the growing conditions.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Disease Resistance and Management:</Text>
        <Text style={styles.paragraph}>Pusa Rohini has been bred for improved resistance to several common tomato diseases, but no variety is completely disease-proof. Common diseases affecting tomatoes include:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Fungal Diseases: Such as early blight, late blight, and Fusarium wilt. Proper crop rotation and fungicides can manage these.</Text>
          <Text style={styles.listItem}>Viral Diseases: Such as Tomato Leaf Curl Virus, to which Pusa Rohini shows some resistance.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Pest Management:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Common Pests: Include aphids, thrips, whiteflies, and tomato hornworms.</Text>
          <Text style={styles.listItem}>Pesticides: It’s best to use integrated pest management (IPM) strategies. This can include biological controls (using natural predators like ladybugs for aphids), mechanical controls (like handpicking larger pests), and chemical controls as a last resort.</Text>
          <Text style={styles.listItem}>Natural and Chemical Pesticides: Using neem oil and other organic pesticides can be effective for minor pest issues. For severe infestations, specific targeted chemical pesticides might be necessary, but always follow local agricultural guidelines and safety standards.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Best Practices for Healthy Growth:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Watering: Regular watering is crucial, especially during the flowering and fruiting stages. However, avoid overhead watering to reduce the risk of foliar diseases.</Text>
          <Text style={styles.listItem}>Nutrition: Regular applications of a balanced fertilizer are necessary to support the high yield potential of Pusa Rohini. Additional supplements of calcium can prevent blossom end rot, a common issue in tomatoes.</Text>
          <Text style={styles.listItem}>Mulching: Helps retain soil moisture and control weeds.</Text>
        </View>
      </View>

      <Text style={styles.paragraph}>By following these guidelines and adjusting practices based on local conditions and observations, farmers can achieve optimal growth and productivity from Pusa Rohini tomato plants.</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#f2f2f2',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  list: {
    paddingLeft: 20,
  },
  listItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
});

export default PusaRohiniTomato;
