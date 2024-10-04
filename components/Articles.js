// components/TicketArticle.js

import React from 'react';
import { View, StyleSheet } from 'react-native';

const Articles = () => {
  return (
    <View style={styles.container}>
      {/* You can add content here later */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // White background
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',     // Center content horizontally
  },
});

export default Articles;
