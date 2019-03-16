import React, { Component } from 'react';

import { 
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import StyleCfs from '../configs/StyleCfs';


class FeaturePost extends Component {
  render() {
    return (
      <View style={styles.wrap}>
        <Image 
          source = {require('../../assets/imgs/bg.jpg')}
          style = {styles.image}
        />
        <View
          style={styles.content}
        >
          <Text
            style={styles.title}
          >
            React Native provides a unified way of managing images 
          </Text>

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
  },
  image: {
    width: '100%',
    height: 200
  },
  content: {
    paddingLeft: StyleCfs.padding,
    paddingRight: StyleCfs.padding,
    paddingBottom: StyleCfs.padding
  },
  title: {
    fontSize: StyleCfs.heading,
    color: '#000',
    paddingTop: StyleCfs.padding,
    paddingBottom: StyleCfs.padding
  },
  meta: {
    flexDirection: 'row',
    fontSize: StyleCfs.meta,
    color: 'blue',
  },
  date: {
    flexGrow: 1
  },
  view: {
    flexGrow: 1,
    textAlign: 'right'
  }
})

export default FeaturePost;