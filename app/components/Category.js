import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import StyleCfs from '../configs/StyleCfs';

class Category extends Component {
  render() {
    const category = this.props.category;
    return (
      <TouchableWithoutFeedback 
        onPress={this.props.onPress}
      >
        <View style={styles.wrap}>
          <Image
            source={{
              uri: category.imageUrl
            }}
            style={styles.image}
          />
          <View style={styles.bg}></View>
          <Text style={styles.title}>
            {category.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    width: 170,
    height: 170,
    margin: StyleCfs.margin,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: StyleCfs.padding,
  },
  bg: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    position: 'absolute',
    zIndex: 2,
    borderRadius: StyleCfs.padding,
  },
  title: {
    fontSize: StyleCfs.heading,
    color: '#fff',
    fontFamily: StyleCfs.familyBold,
    position: 'absolute',
    zIndex: 3
  }
})

export default Category;