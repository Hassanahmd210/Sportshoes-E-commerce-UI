// components/Article.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const articles = [
  { id: '1', title: 'The Health Benefits of Running', date: 'September 4, 2023', image: 'https://propelphysiotherapy.com/wp-content/uploads/2022/08/nine-benefits-of-running-propel-physiotherapy.jpg' },
  { id: '2', title: 'From Couch to 5K', date: 'August 15, 2023', image: 'https://www.back-to-health.co.uk/uploads/news/images/couch-to-5k-your-journey-from-1707992347-29.png' },
  { id: '3', title: 'Running: Incredible Benefits', date: 'August 10, 2023', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxyFxAZdbI9gN3HO0TJcutOTo6Zp9HOSLBnQ&s' },
  { id: '4', title: 'Choosing the Right Running Shoes', date: 'July 25, 2023', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSls6bFXyhstvzEIOr0ifzXd_b0KeyOvGusdA&s' },
  { id: '5', title: 'The Runner’s High', date: 'June 18, 2023', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnBdEzLC-LirfH3TI0EtnySoXemwN8vet8Tg&s' },
  { id: '6', title: 'Mindful Running', date: 'June 1, 2023', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGe6Ekcjuu9voyvDoaolr0VLKbnKcxTpL9kw&s' },
];

export default function Article({ navigation }) {
  return (
    <FlatList
      style={styles.container}
      data={articles}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ArticleDetail', { article: item })}>
          <View style={styles.article}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.articleInfo}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  article: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  articleInfo: {
    marginLeft: 12,
    justifyContent: 'center',
    flex: 1,
  },
  date: {
    color: 'gray',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
