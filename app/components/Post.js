import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import StyleCfs from '../configs/StyleCfs';

class Post extends Component {
  render() {
    return (
      <View style={styles.wrap}>
        <Image 
          source={require('../../assets/imgs/bg.jpg')}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>The image name is resolved the same way JS modules are resolved.</Text>
          <View style={styles.meta}>
            <Text style={styles.date}>20/10/2019</Text>
            <Text style={styles.view}>2k views</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',

    padding: StyleCfs.padding,
    borderTopWidth: 1,
    borderTopColor: StyleCfs.borderColor,
  },
  image: {
    flex: 3,
    height: 100
  },
  content: {
    justifyContent: 'space-between',
    flex: 7,
    paddingLeft: StyleCfs.padding
  },
  title: {
    fontSize: StyleCfs.title
  },
  meta: {
    flexDirection: 'row',
    fontSize: StyleCfs.meta,
  },
  date: {
    flexGrow: 1
  },
  view: {
    flexGrow: 1,
    textAlign: 'right'
  }
})

export default Post;