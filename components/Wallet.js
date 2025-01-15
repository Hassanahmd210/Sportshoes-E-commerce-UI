// Wallet.js
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Wallet() {
  return (
    <View style={styles.container}>
      {/* Wallet Balance */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Rp1.000.000</Text>
      </View>

      {/* Top Up, Payment, Payment Code Options */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
          <Text style={styles.actionText}>Top up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="card-outline" size={24} color="black" />
          <Text style={styles.actionText}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="qr-code-outline" size={24} color="black" />
          <Text style={styles.actionText}>Payment code</Text>
        </TouchableOpacity>
      </View>

      {/* Last Transactions */}
      <Text style={styles.transactionTitle}>LAST TRANSACTION</Text>
      <ScrollView style={styles.transactionList}>
        {/* Sample Transactions */}
        <View style={styles.transactionItem}>
          <Ionicons name="arrow-up-circle-outline" size={20} color="gray" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionType}>Payment</Text>
            <Text style={styles.transactionDate}>September 3, 2023</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: 'red' }]}>-Rp450.000</Text>
        </View>

        <View style={styles.transactionItem}>
          <Ionicons name="arrow-down-circle-outline" size={20} color="gray" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionType}>Top up</Text>
            <Text style={styles.transactionDate}>September 3, 2023</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: 'green' }]}>+Rp345.000</Text>
        </View>

        <View style={styles.transactionItem}>
          <Ionicons name="arrow-down-circle-outline" size={20} color="gray" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionType}>Top up</Text>
            <Text style={styles.transactionDate}>August 20, 2023</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: 'green' }]}>+Rp70.000</Text>
        </View>

        <View style={styles.transactionItem}>
          <Ionicons name="arrow-up-circle-outline" size={20} color="gray" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionType}>Payment</Text>
            <Text style={styles.transactionDate}>August 17, 2023</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: 'red' }]}>-Rp400.000</Text>
        </View>

        <View style={styles.transactionItem}>
          <Ionicons name="arrow-down-circle-outline" size={20} color="gray" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionType}>Top up</Text>
            <Text style={styles.transactionDate}>August 17, 2023</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: 'green' }]}>+Rp150.000</Text>
        </View>

        <View style={styles.transactionItem}>
          <Ionicons name="arrow-down-circle-outline" size={20} color="gray" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionType}>Top up</Text>
            <Text style={styles.transactionDate}>July 30, 2023</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: 'green' }]}>+Rp50.000</Text>
        </View>

        <View style={styles.transactionItem}>
          <Ionicons name="arrow-up-circle-outline" size={20} color="gray" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionType}>Payment</Text>
            <Text style={styles.transactionDate}>July 20, 2023</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: 'red' }]}>-Rp250.000</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  balanceContainer: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  balanceText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    fontSize: 14,
    color: 'black',
    marginTop: 4,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  transactionList: {
    flex: 1,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 8,
  },
  transactionType: {
    fontSize: 14,
    color: 'black',
  },
  transactionDate: {
    fontSize: 12,
    color: 'gray',
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
