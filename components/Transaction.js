// components/Transaction.js
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const products = [
  {
    id: '1',
    title: 'AERO SPORT INFINITY MAX - WHITE',
    price: 'Rp450.000',
    rating: 4.0,
    image: 'https://rockrun.com/cdn/shop/articles/2_1600x.jpg?v=1716296628%27',
  },
  {
    id: '2',
    title: 'AERO SPORT INFINITY MAX - PINK',
    price: 'Rp450.000',
    rating: 4.5,
    image: 'https://assets.ajio.com/medias/sys_master/root/20200908/ORIN/5f568f22f997dd6918b7276f/-473Wx593H-460695810-orange-MODEL.jpg',
  },
  {
    id: '3',
    title: 'SPORT+ RUNNER BLACK EDITION',
    price: 'Rp250.000',
    rating: 4.8,
    image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/p/j/r/6-wf-834-a-6-zixer-red-original-imaghmp5pppg6hqe.jpeg?q=90&crop=false%27',
  },
  {
    id: '4',
    title: 'SPORT+ ZOOM FLY - GREY',
    price: 'Rp699.000',
    rating: 4.9,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT03G9GuLWMKIDLNh9KNWMfTu1YwTg_AdLRGg&s%27',
  },
];

const ProductCard = ({ title, price, rating, image }) => (
  <View style={styles.productCard}>
    <Image source={{ uri: image }} style={styles.productImage} />
    <Text style={styles.productTitle}>{title}</Text>
    <Text style={styles.productRating}>⭐ {rating.toFixed(1)}</Text>
    <Text style={styles.productPrice}>{price}</Text>
  </View>
);

export default function Transaction() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Search By</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#666"
        />
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  filterButton: {
    backgroundColor: '#ff6347',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  filterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productRating: {
    fontSize: 12,
    color: '#ffa500',
    textAlign: 'center',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#ff6347',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
