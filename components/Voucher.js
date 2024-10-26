import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Voucher = () => {
  return (
    <View style={styles.container}>
      <View style={styles.activeVoucher}>
        <Text style={styles.title}>ACTIVE VOUCHER</Text>
        <View style={styles.voucherItem}>
          <View style={styles.row}>
            <Text style={styles.discount}>15% OFF</Text>
            <Text style={styles.date}>01/09/2023 - 10/09/2023</Text>
          </View>
          <Text style={styles.description}>All Items</Text>
          <View style={styles.separator} />
          <Text style={styles.payment}>PAYMENT WITH VISA</Text>
        </View>
        <View style={styles.voucherItem}>
          <View style={styles.row}>
            <Text style={styles.discount}>20% OFF</Text>
            <Text style={styles.date}>01/09/2023 - 10/09/2023</Text>
          </View>
          <Text style={styles.description}>Only Bag</Text>
          <View style={styles.separator} />
          <Text style={styles.payment}>PAYMENT WITH VISA</Text>
        </View>
      </View>
      <View style={styles.expiredVoucher}>
        <Text style={styles.title}>EXPIRED VOUCHER</Text>
        <View style={styles.voucherItem1}>
          <View style={styles.row}>
            <Text style={styles.discountExpired}>30% OFF</Text>
            <Text style={styles.date1}>08/08/2023 - 12/08/2023</Text>
          </View>
          <Text style={styles.description1}>Footwear</Text>
          <View style={styles.separator1} />
          <Text style={styles.payment}>PAYMENT WITH WALLET</Text>
        </View>
        <View style={styles.voucherItem1}>
          <View style={styles.row}>
            <Text style={styles.discountExpired}>50% OFF</Text>
            <Text style={styles.date1}>08/08/2023 - 12/08/2023</Text>
          </View>
          <Text style={styles.description1}>All Items</Text>
          <View style={styles.separator1} />
          <Text style={styles.payment}>PAYMENT WITH CREDIT CARD</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  activeVoucher: {
    padding: 15,
  },
  expiredVoucher: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  voucherItem: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#FFA07A',
    backgroundColor: '#FFF5EC',
  },
  voucherItem1: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#000000',
    backgroundColor: '#F0F0F0',
  },
  discount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF6347',
  },
  discountExpired: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  description: {
    fontSize: 12,
    color: '#FF6347',
    marginBottom: 15,
  },
  description1: {
    fontSize: 12,
    color: '#666',
    marginBottom: 15,
  },
  separator: {
    borderBottomColor: '#FFA07A',
    borderBottomWidth: 2,
    borderStyle: 'dashed',
    marginVertical: 8,
  },
  separator1: {
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    borderStyle: 'dashed',
    marginVertical: 8,
  },
  date: {
    fontSize: 12,
    color: '#FFA07A',
  },
  date1: {
    fontSize: 12,
    color: '#666',
  },
  payment: {
    fontSize: 12,
    color: '#666',
    fontWeight: '700',
    marginTop: 5,
  },
});

export default Voucher;
