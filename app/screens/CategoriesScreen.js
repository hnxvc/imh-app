import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Category } from '../components/Index';

class CategoriesScreen extends Component {
  render() {
    return (
      <View>
          <Category />
          <Category />
          <Category />
          <Category />
      </View>
    );
  }
}

export default CategoriesScreen;