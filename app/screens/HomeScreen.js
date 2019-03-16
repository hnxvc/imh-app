import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import StyleCfgs from '../configs/StyleCfs';

import { FeaturePost, Post } from '../components/Index';

class HomeScreen extends Component {
  render() {
    return (
      <View style = {styles.screen}>

        <FlatList
          data = {
            [
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'}
            ]
          }
          renderItem={({item, index}) => index === 0 ?
            <FeaturePost />
            :
            <Post />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
  }
})

export default HomeScreen;