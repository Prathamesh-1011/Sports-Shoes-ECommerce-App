import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

const DATA = [
  {
    id: '1',
    date: 'Today, 10:20',
    title: 'LIMITED-TIME PROMO - UP TO 50% OFF!',
    message: "Don't miss out on this special opportunity! Get up to 50% off on all our sports shoes. Check out our latest collection now!",
  },
  {
    id: '2',
    date: 'Yesterday, 14:00',
    title: 'New Arrivals Are Here!',
    message: 'Check out our new collection of sports shoes that just arrived!',
  },
  // Add more notifications as needed
];

const NotificationScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationDate}>{item.date}</Text>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationMessage}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
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
  notificationItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  notificationDate: {
    fontSize: 12,
    color: '#999',
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
  },
});

export default NotificationScreen;
