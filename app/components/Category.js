import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import StyleCfs from '../configs/StyleCfs';

class Category extends Component {
  render() {
    return (
      <TouchableWithoutFeedback 
        onPress={this.props.onPress} 
      >
        <View style={styles.wrap}>
          <ImageBackground
            source={require('../../assets/imgs/bg.jpg')}
            style={styles.category}
            imageStyle={{ borderRadius: StyleCfs.radius }}
          >
              <Text style={styles.title}>
                {this.props.title}
              </Text>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    width: 170,
    height: 170,
    margin: 7,
    overflow: 'hidden'
  },
  category: {
    width: '100%',
    height: '100%',
    borderRadius: StyleCfs.padding,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: StyleCfs.heading,
    color: '#fff'
  }
})

export default Category;