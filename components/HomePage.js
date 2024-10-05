import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const Home = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Sport Shoes</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
              <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity> 
            <AntDesign name="shoppingcart" size={24} color="black" />
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
              <FontAwesome name="bell-o" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search items"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color="black" />
        </TouchableOpacity>
      </View>

        {/* Wallet & Top Up */}
      <View style={styles.walletContainer}>
        <View style={styles.walletBalanceSection}>
          <Text style={styles.walletLabelText}>Wallet balance</Text>
          <View style={styles.walletBalanceContent}>
            <Ionicons name="wallet-outline" size={20} color="black" />
            <Text style={styles.walletBalanceText}> Rp1.000.000</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.topUpSection}>
          <Text style={styles.walletLabelText}>Top up balance</Text>
          <View style={styles.topUpContent}>
            <Ionicons name="add-circle-outline" size={20} color="black" />
            <Text style={styles.topUpButtonText}>Top up</Text>
          </View>
        </TouchableOpacity>
      </View>

        {/* Promo Banner */}
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.promoBanner}>
        <Image
                source={require('../assets/banner.png')} 
                style={styles.promoImage}
              />
          {/* <Text style={styles.promoText}>15% OFF</Text>
          <Text style={styles.promoSubText}>All Items</Text>
          <Text style={styles.promoDate}>01/09/2023 - 10/09/2023</Text> */}
        </View>
        <View style={styles.promoBanner}>
        <Image
                source={require('../assets/banner1.png')} 
                style={styles.promoImage}
              />
          {/* <Text style={styles.promoText}>FLASH SALE</Text>
          <Text style={styles.promoSubText}>New Arrival Shoes</Text>
          <Text style={styles.promoDate}>01/09/2023 - 10/09/2023</Text> */}
        </View>
       </ScrollView>

        {/* Shop by Category */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesTitle}>SHOP BY CATEGORY</Text>
          <View style={styles.categoryButtonsRow}>
            <TouchableOpacity style={styles.categoryButton}>
              <Ionicons name="footsteps-outline" size={40} color="black" />
              <Text style={styles.categoryButtonText}>FOOTWEAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Ionicons name="bag-outline" size={40} color="black" />
              <Text style={styles.categoryButtonText}>BAGS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Ionicons name="shirt-outline" size={40} color="black" />
              <Text style={styles.categoryButtonText}>APPAREL</Text>
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F26522',
    fontStyle: 'italic',
    paddingTop:25,
    paddingLeft:8,
    fontFamily:'sans-serif-condensed',
  },
  headerIcons: {
    flexDirection: 'row',
    paddingTop:25,
  },
  headerIcon: {
    flexDirection: 'row',
    paddingTop:25,
    justifyContent: 'space-between',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchButton: {
    marginLeft: 16,
    backgroundColor: '#F26522',
    padding: 8,
    borderRadius: 12,
  },
  walletContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Adds a shadow for Android
    marginVertical: 16,
    marginHorizontal: 20, // Adjusts the spacing from the screen edges
  },
  walletBalanceSection: {
    flex: 1,
  },
  walletLabelText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  walletBalanceContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletBalanceText: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    height: '100%',
    width: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 16,
  },
  topUpSection: {
    flex: 1,
  },
  topUpContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topUpButtonText: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
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
  categoriesContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333', // Dark text for the title
    fontFamily:'sans-serif-condensed',
  },
  categoryButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoryButton: {
    width: 100,
    height: 100,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f5522f', // Orange text
    marginTop: 8,
    // color: '#333', // Dark text for the title
    fontFamily:'sans-serif-condensed',
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
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 16,
    marginHorizontal: 8,
    shadowColor: '#000',
    width: '45%',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333', // Dark text for the title
    fontFamily:'sans-serif-condensed',
  },
  productCategory: {
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    fontSize: 16,
    color: '#f5522f',
  },
});
