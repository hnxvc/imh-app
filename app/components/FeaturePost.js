import React, { Component } from 'react';

import { 
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import StyleCfs from '../configs/StyleCfs';


class FeaturePost extends Component {
  render() {
    const post = this.props.post;

    return (
      <TouchableWithoutFeedback 
        onPress={this.props.onPress} 
      >
        <View
          style={styles.wrap}
        >
          <Image 
            source = {{
              uri: post.imageUrl
            }}
            style = {styles.image}
          />
          <View
            style={styles.content}
          >
            <Text
              style={styles.title}
            >
              {post.title}
            </Text>

            <View style={styles.meta}>
              <Text style={styles.date}>{post.createdDate}</Text>
              <Text style={styles.view}>{post.views} Views</Text>
            </View>

          </View>
        </View>
      </TouchableWithoutFeedback>
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
    color: StyleCfs.darkColor,
    paddingTop: StyleCfs.padding,
    paddingBottom: StyleCfs.padding,
    fontFamily: StyleCfs.familyBold
  },
  meta: {
    flexDirection: 'row',
    fontSize: StyleCfs.meta,
    color: StyleCfs.greyColor,
    fontFamily: StyleCfs.family
  },
  date: {
    flexGrow: 1,
    color: StyleCfs.greyColor,
    fontFamily: StyleCfs.family
  },
  view: {
    flexGrow: 1,
    textAlign: 'right',
    color: StyleCfs.greyColor
  }
})

export default FeaturePost;