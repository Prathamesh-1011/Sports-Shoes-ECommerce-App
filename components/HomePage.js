import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Sport Shoes</Text>
        <View style={styles.headerIcons}>
          {<AntDesign name="hearto" size={24} color="black" />}
          {<AntDesign name="shoppingcart" size={24} color="black" />}
          {<FontAwesome name="bell-o" size={24} color="black" />}
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Text style={styles.searchBarPlaceholder}>Search items</Text>
        {<FontAwesome name="search" size={24} color="black" />}
      </View>

      {/* Balance Section */}
      <View style={styles.balanceSection}>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Wallet balance</Text>
          <Text style={styles.balanceAmount}>Rp1.000.000</Text>
        </View>
        <TouchableOpacity style={styles.topUpButton}>
          <Text style={styles.topUpText}>+ Top up</Text>
        </TouchableOpacity>
      </View>

      
        {/* Promo Banner */}
        <View style={styles.promoBanner}>
          <Text style={styles.promoText}>15% OFF</Text>
          <Text style={styles.promoSubText}>All Items</Text>
          <Text style={styles.promoDate}>01/09/2023 - 10/09/2023</Text>
        </View>

        {/* Shop by Category */}
        <View style={styles.categorySection}>
          <Text style={styles.categoryHeading}>SHOP BY CATEGORY</Text>
          <View style={styles.categoryList}>
            {/* Category Item - Footwear */}
            <TouchableOpacity style={styles.categoryItem}>
              {<Ionicons name="footsteps-outline" size={24} color="black" />}
              <Text style={styles.categoryName}>FOOTWEAR</Text>
            </TouchableOpacity>
            {/* Category Item - Bags */}
            <TouchableOpacity style={styles.categoryItem}>
              {<Ionicons name="bag-sharp" size={24} color="black" />}
              <Text style={styles.categoryName}>BAGS</Text>
            </TouchableOpacity>
            {/* Category Item - Apparel */}
            <TouchableOpacity style={styles.categoryItem}>
              {<Ionicons name="shirt-outline" size={24} color="black" />}
              <Text style={styles.categoryName}>APPAREL</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* For You Section */}
        <View style={styles.forYouSection}>
          <Text style={styles.forYouHeading}>FOR YOU</Text>
          <View style={styles.productList}>
            {/* Product Item - Air Legging Sport */}
            <View style={styles.productItem}>
              <Image
                source={require('../assets/pict1.png')} // Replace with actual image path
                style={styles.productImage}
              />
              <Text style={styles.productName}>AIR LEGGING SPORT</Text>
              <Text style={styles.productCategory}>Apparel</Text>
              <Text style={styles.productPrice}>Rp200.000</Text>
            </View>

            {/* Product Item - Aero Sport Infinity Max */}
            <View style={styles.productItem}>
              <Image
                source={require('../assets/pict.png')} // Replace with actual image path
                style={styles.productImage}
              />
              <Text style={styles.productName}>AERO SPORT INFINITY MAX</Text>
              <Text style={styles.productCategory}>Footwear</Text>
              <Text style={styles.productPrice}>Rp450.000</Text>
            </View>

            {/* Product Item - Sport+ Runner Blue Edition */}
            <View style={styles.productItem}>
              <Image
                source={require('../assets/pict2.png')} // Replace with actual image path
                style={styles.productImage}
              />
              <Text style={styles.productName}>SPORT+ RUNNER BLUE EDITION</Text>
              <Text style={styles.productCategory}>Footwear</Text>
              <Text style={styles.productPrice}>Rp250.000</Text>
            </View>

                        {/* Product Item - Sport+ Bag */}
                        <View style={styles.productItem}>
              <Image
                source={require('../assets/pict3.png')} // Replace with actual image path
                style={styles.productImage}
              />
              <Text style={styles.productName}>SPORT+ BAG</Text>
              <Text style={styles.productCategory}>Bags</Text>
              <Text style={styles.productPrice}>Rp150.000</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const Exchange = () => {
  return (
    <View style={styles.container}>
      <Text>Exchange Screen</Text>
    </View>
  );
};

const Tickets = () => {
  return (
    <View style={styles.container}>
      <Text>Tickets Screen</Text>
    </View>
  );
};

const Forms = () => {
  return (
    <View style={styles.container}>
      <Text>Forms Screen</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  searchBar: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchBarPlaceholder: {
    fontSize: 16,
    color: '#666',
  },
  balanceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  balanceCard: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    borderRadius: 10,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#666',
  },
  balanceAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  topUpButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 10,
  },
  topUpText: {
    fontSize: 14,
    color: '#fff',
  },
  promoBanner: {
    padding: 16,
    backgroundColor: '#f7f7f7',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  promoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  promoSubText: {
    fontSize: 14,
    color: '#666',
  },
  promoDate: {
    fontSize: 12,
    color: '#999',
  },
  categorySection: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  categoryHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryItem: {
    padding: 16,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
  },
  categoryName: {
    fontSize: 14,
    color: '#666',
  },
  forYouSection: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  forYouHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  productItem: {
    padding: 16,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    width: '45%',
    marginBottom: 16,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productName: {
    fontSize: 14,
    color: '#666',
  },
  productCategory: {
    fontSize: 12,
    color: '#999',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});


export default Home;