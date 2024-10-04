// components/WishlistScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: '1',
    name: 'AERO SPORT INFINITY PRO',
    category: 'Footwear',
    price: 'Rp400.000',
    image: require('../assets/pict4.png'), // Replace with actual image path
  },
  {
    id: '2',
    name: 'SPORT+ INVINCIBLE PRO',
    category: 'Footwear',
    price: 'Rp389.000',
    image: require('../assets/pict5.png'), // Replace with actual image path
  },
  {
    id: '3',
    name: 'SPORT SNEAKERS+ BLUE',
    category: 'Footwear',
    price: 'Rp200.000',
    image: require('../assets/pict6.png'), // Replace with actual image path
  },
  {
    id: '4',
    name: 'SPORT+ INVINCIBLE MAX',
    category: 'Footwear',
    price: 'Rp399.000',
    image: require('../assets/pict7.png'), // Replace with actual image path
  },
];

const WishlistScreen = () => {
  const [wishlist, setWishlist] = useState(DATA);

  const handleRemoveFromWishlist = (itemId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== itemId)
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCategory}>{item.category}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveFromWishlist(item.id)}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={wishlist}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemCategory: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    color: '#f4511e',
  },
  removeButton: {
    backgroundColor: '#f4511e',
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  removeButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default WishlistScreen;
