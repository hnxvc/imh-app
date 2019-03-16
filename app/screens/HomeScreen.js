import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StyleCfgs from '../configs/StyleCfs';

import { FeaturePost, Post } from '../components/Index';

class HomeScreen extends Component {
  render() {
    return (
      <View style = {styles.screen}>
        <FeaturePost />
        <Post />
        <Post />
        <Post />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
  }
})

export default HomeScreen;