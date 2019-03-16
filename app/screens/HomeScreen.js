import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StyleCfgs from '../configs/StyleCfs';

import { FeaturePost } from '../components/Index';

class HomeScreen extends Component {
  render() {
    return (
      <View style = {styles.screen}>
        <FeaturePost />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
  }
})

export default HomeScreen;