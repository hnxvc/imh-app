import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, RefreshControl } from 'react-native';
import StyleCfs from '../configs/StyleCfs';
import { AppService } from '../services/app-services';
class PostDetailScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: { marginTop: -10 },
  });

  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      post: {}
    };
  }

  componentDidMount() {
    this.initData(null);
  }

  onRefresh = () => {
    this.setState({isRefreshing: true});
    this.initData(() => {
      this.setState({isRefreshing: false});
    });
  }

  initData = (callback) => {
    const postId = this.props.navigation.getParam('postId');
    AppService.getPost(postId).then(data => {
      this.setState({
        post: data
      });
      if (callback) {
        callback();
      }
    }).catch(err => {
      if (callback) {
        callback();
      }
      Alert.alert(err);
    });
  }

  render() {
    const post = this.state.post;
    return (
      <View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh}
            />
          }
        >
          <Text style={styles.title}>{post.title}</Text>
          <View style={styles.meta}>
            <Text style={styles.date}>{post.createdDate}</Text>
            <Text style={styles.view}>{post.views} Views</Text>
          </View>
          <Image 
            source={{
              uri: post.imageUrl
            }}
            style={styles.image}
          />
          <View style={styles.wrapContent}>
            <Text style={styles.content}>
              { `${post.content}` }
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  title: {
    fontSize: StyleCfs.heading,
    paddingTop: StyleCfs.padding,
    paddingBottom: StyleCfs.padding,
    paddingLeft: StyleCfs.padding,
    paddingRight: StyleCfs.padding,
    fontFamily: StyleCfs.familyBold,
    color: StyleCfs.darkColor
  },
  meta: {
    paddingTop: StyleCfs.padding,
    paddingBottom: StyleCfs.padding,
    paddingLeft: StyleCfs.padding,
    paddingRight: StyleCfs.padding,
    flexDirection: 'row',
    fontSize: StyleCfs.meta,
    color: StyleCfs.greyColor
  },
  date: {
    flexGrow: 1,
    color: StyleCfs.greyColor,
    fontFamily: StyleCfs.family
  },
  view: {
    flexGrow: 1,
    textAlign: 'right',
    color: StyleCfs.greyColor,
    fontFamily: StyleCfs.family
  },
  image: {
    width: '100%',
    height: 200
  },
  wrapContent: {
    paddingTop: StyleCfs.padding,
    paddingBottom: StyleCfs.padding,
    paddingLeft: StyleCfs.padding,
    paddingRight: StyleCfs.padding,
  },
  content: {
    fontSize: 18,
    fontFamily: StyleCfs.family,
    color: StyleCfs.darkColor
  }
})

export default PostDetailScreen;