// components/ArticleDetail.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function ArticleDetail({ route }) {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: article.image }} style={styles.image} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.date}>{article.date}</Text>

      <Text style={styles.sectionTitle}>Introduction</Text>
      <Text style={styles.content}>
        Running is a great way to improve overall health, boost mood, and stay in shape. It’s one of the most accessible forms of exercise and offers numerous benefits.
      </Text>

      <Text style={styles.sectionTitle}>Benefits of Running</Text>
      <Text style={styles.content}>
        - Improves cardiovascular health and strengthens the heart.{'\n'}
        - Boosts mental health by releasing endorphins and reducing stress.{'\n'}
        - Increases bone density and strengthens muscles.{'\n'}
        - Aids in weight management by burning calories effectively.
      </Text>

      <Text style={styles.sectionTitle}>Disadvantages</Text>
      <Text style={styles.content}>
        - May cause joint stress, especially in the knees and ankles if not done correctly.{'\n'}
        - Risk of injuries such as shin splints, especially without proper warm-up or technique.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  content: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginTop: 10,
  },
});
