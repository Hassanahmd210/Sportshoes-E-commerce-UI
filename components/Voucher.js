// components/Voucher.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Voucher() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>ACTIVE VOUCHER</Text>
      <View style={styles.voucher}>
        <Text style={styles.discount}>15% OFF</Text>
        <Text style={styles.description}>All Items</Text>
        <Text style={styles.paymentMethod}>PAYMENT WITH VISA</Text>
        <Text style={styles.date}>01/09/2023 - 10/09/2023</Text>
      </View>
      <View style={styles.voucher}>
        <Text style={styles.discount}>20% OFF</Text>
        <Text style={styles.description}>Only Bag</Text>
        <Text style={styles.paymentMethod}>PAYMENT WITH VISA</Text>
        <Text style={styles.date}>01/09/2023 - 10/09/2023</Text>
      </View>
      
      <Text style={styles.title}>EXPIRED VOUCHER</Text>
      <View style={styles.voucherExpired}>
        <Text style={[styles.discount, styles.expiredDiscount]}>30% OFF</Text>
        <Text style={styles.description}>Footwear</Text>
        <Text style={styles.paymentMethod}>PAYMENT WITH WALLET</Text>
        <Text style={styles.date}>08/08/2023 - 12/08/2023</Text>
      </View>
      <View style={styles.voucherExpired}>
        <Text style={[styles.discount, styles.expiredDiscount]}>50% OFF</Text>
        <Text style={styles.description}>All Items</Text>
        <Text style={styles.paymentMethod}>PAYMENT WITH CREDIT CARD</Text>
        <Text style={styles.date}>08/08/2023 - 12/08/2023</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  voucher: {
    padding: 16,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: '#fff8e1',
  },
  voucherExpired: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: '#f5f5f5',
  },
  discount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
  },
  expiredDiscount: {
    color: 'gray', // Grey color for expired discount text
  },
  description: {
    fontSize: 16,
  },
  paymentMethod: {
    marginTop: 8,
    color: 'gray',
  },
  date: {
    marginTop: 4,
    color: 'gray',
  },
});
