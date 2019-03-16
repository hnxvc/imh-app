import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import StyleCfs from '../configs/StyleCfs';

class Category extends Component {
  render() {
    return (
      <View style={styles.wrap}>
        <ImageBackground
          source={require('../../assets/imgs/bg.jpg')}
          style={styles.category}
        >
            <Text style={styles.title}>
              Front End
            </Text>
        </ImageBackground>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    width: 170,
    height: 170,
    padding: 7
  },
  category: {
    width: '100%',
    height: '100%',
    borderRadius: StyleCfs.radius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: StyleCfs.heading,
    color: '#fff'
  }
})

export default Category;