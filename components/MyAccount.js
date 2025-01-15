// components/MyAccount.js
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import myimage from './hoboeren1.jpg';

export default function MyAccount() {
  const navigation = useNavigation(); // Get navigation prop

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={20} color="#333" />
        <Text style={styles.backText}>BACK TO PROFILE</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Image style={styles.profileImage} source={myimage} />
        <Text style={styles.userName}>Hobo Eren</Text>
        <Text style={styles.userDetails}>85812345678</Text>
        <Text style={styles.userDetails}>rumblingrumbling@gmail.com</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionItem}>Address</Text>
        <Text style={styles.sectionItem}>Security & Account</Text>
        <Text style={styles.sectionItem}>Card / Bank Account</Text>
        <Text style={styles.sectionItem}>Instant payment</Text>
        <Text style={styles.sectionItem}>Notifications</Text>
        <Text style={styles.sectionItem}>Account privacy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  backButton: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 80, height: 80, borderRadius: 40 },
  backText: { color: '#333', fontWeight: 'bold', fontSize: 16, marginLeft: 8 },
  header: { alignItems: 'flex-start', padding: 20 },
  userName: { fontSize: 18, fontWeight: 'bold' },
  userDetails: { fontSize: 14, color: '#666' },
  section: { paddingTop: 20 },
  sectionItem: { fontSize: 16, paddingVertical: 10 },
});
