import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Category } from '../components/Index';

class CategoriesScreen extends Component {
  render() {
    return (
      <View style={styles.grid}>
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
})

export default CategoriesScreen;