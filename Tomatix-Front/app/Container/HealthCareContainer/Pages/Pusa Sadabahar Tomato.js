import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const PusaSadabaharTomato = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Pusa Sadabahar</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Suitable Soil:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Type: Pusa Sadabahar tomatoes thrive in well-drained loamy soil that is rich in organic matter.</Text>
          <Text style={styles.listItem}>pH: The ideal soil pH ranges from 6.0 to 7.0, slightly acidic to neutral. Adjust soil pH if necessary using lime to raise pH or sulfur to lower pH.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Temperature:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Optimal Growing Temperature: Pusa Sadabahar performs well in temperatures ranging from 20°C to 30°C.</Text>
          <Text style={styles.listItem}>Seasonal Adaptability: It can be grown throughout the year in regions with suitable temperature conditions. However, it may require protection from extreme heat or cold.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Season and Planting Months:</Text>
        <Text style={styles.paragraph}>Planting Time:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>In northern India: February-March for summer cropping and September-October for the winter crop.</Text>
          <Text style={styles.listItem}>In southern India: Planting can vary based on regional climatic conditions, with multiple cropping cycles possible in a year.</Text>
        </View>
        <Text style={styles.paragraph}>Harvesting: Expect a continuous harvest throughout the growing season, with fruit production starting approximately 60-70 days after transplanting.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Disease Resistance and Management:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Disease Resistance: Pusa Sadabahar exhibits resistance to common tomato diseases such as early blight, late blight, and bacterial wilt.</Text>
          <Text style={styles.listItem}>Preventive Measures: Implement crop rotation, proper sanitation, and cultural practices to minimize disease incidence.</Text>
          <Text style={styles.listItem}>Fungicides: Use fungicides containing copper or other recommended chemicals as preventive measures against fungal diseases. Apply according to label instructions and local agricultural recommendations.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Pest Management:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Common Pests: Aphids, whiteflies, thrips, and fruit borers are common pests that affect tomato plants.</Text>
          <Text style={styles.listItem}>Integrated Pest Management (IPM): Adopt IPM strategies, including biological control, cultural practices, and chemical treatments when necessary.</Text>
          <Text style={styles.listItem}>Pesticides: Use pesticides sparingly and judiciously, targeting specific pests while minimizing harm to beneficial insects and the environment.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Best Practices for Healthy Growth:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Water Management: Provide consistent moisture through irrigation, avoiding waterlogging or drought stress.</Text>
          <Text style={styles.listItem}>Nutrient Management: Maintain soil fertility with balanced fertilization, including organic amendments and micronutrient supplements as needed.</Text>
          <Text style={styles.listItem}>Pruning and Training: Regularly prune and train plants to improve air circulation, reduce disease incidence, and optimize fruit production.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Market Opportunities:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Pusa Sadabahar tomatoes are well-suited for both fresh market sales and processing industries due to their continuous fruiting habit, good fruit quality, and disease resistance.</Text>
          <Text style={styles.listItem}>Explore market opportunities in local markets, supermarkets, wholesale markets, and food processing units.</Text>
        </View>
      </View>
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

export default PusaSadabaharTomato;
