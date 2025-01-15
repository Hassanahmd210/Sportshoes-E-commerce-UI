// components/MyProfile.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import myimage from './hoboeren1.jpg';

export default function MyProfile() {
  const navigation = useNavigation(); // Access navigation

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('My Account')}>
          <Image style={styles.profileImage} source={myimage} />
        </TouchableOpacity>
        <Text style={styles.userName}>Hobo Eren</Text>
        <Text style={styles.walletBalance}>Rp1.000.000</Text>
      </View>

      <View style={styles.navBar}>
        <View style={styles.navItem}>
          <MaterialIcons name="hourglass-empty" size={24} color="#f97316" />
          <Text style={styles.navText}>Pending</Text>
        </View>
        <View style={styles.navItem}>
          <MaterialIcons name="local-shipping" size={24} color="#f97316" />
          <Text style={styles.navText}>Packaged</Text>
        </View>
        <View style={styles.navItem}>
          <FontAwesome name="send" size={24} color="#f97316" />
          <Text style={styles.navText}>Sent</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="star-outline" size={24} color="#f97316" />
          <Text style={styles.navText}>Review</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>MY ACTIVITY</Text>
        <View style={styles.sectionItem}>
          <MaterialIcons name="history" size={20} color="#333" />
          <Text style={styles.sectionText}>Transaction history</Text>
        </View>
        <View style={styles.sectionItem}>
          <FontAwesome name="heart-o" size={20} color="#333" />
          <Text style={styles.sectionText}>Wishlist</Text>
        </View>
        <View style={styles.sectionItem}>
          <Entypo name="star-outlined" size={20} color="#333" />
          <Text style={styles.sectionText}>Rating</Text>
        </View>
        <View style={styles.sectionItem}>
          <MaterialIcons name="visibility" size={20} color="#333" />
          <Text style={styles.sectionText}>Last seen product</Text>
        </View>
        <View style={styles.sectionItem}>
          <Ionicons name="pricetag-outline" size={20} color="#333" />
          <Text style={styles.sectionText}>My voucher</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>OTHER</Text>
        <View style={styles.sectionItem}>
          <Ionicons name="chatbubble-ellipses-outline" size={20} color="#333" />
          <Text style={styles.sectionText}>Chat with Customer Service</Text>
        </View>
        <View style={styles.sectionItem}>
          <Ionicons name="help-circle-outline" size={20} color="#333" />
          <Text style={styles.sectionText}>Help center</Text>
        </View>
        <View style={styles.sectionItem}>
          <Ionicons name="information-circle-outline" size={20} color="#333" />
          <Text style={styles.sectionText}>Info</Text>
        </View>
        <View style={styles.sectionItem}>
          <Ionicons name="document-text-outline" size={20} color="#333" />
          <Text style={styles.sectionText}>About App</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 20, backgroundColor: '#f97316', alignItems: 'center' },
  profileImage: { width: 80, height: 80, borderRadius: 40 },
  userName: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  walletBalance: { color: '#fff', fontSize: 16 },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', padding: 10, backgroundColor: '#fff' },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 14, fontWeight: 'bold', color: '#333', marginTop: 4 },
  section: { padding: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  sectionItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 5 },
  sectionText: { fontSize: 14, marginLeft: 10 },
});
