import React, { Component } from 'react';
import { View, StyleSheet, FlatList, RefreshControl, Alert } from 'react-native';
import { FeaturePost, Post } from '../components/Index';
import { AppService } from '../services/app-services';
import axios from 'axios';
class HomeScreen extends Component {

  static navigationOptions =
  {
    header : null
  };

  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      posts: []
    };
  }

  onRefresh = () => {
    this.setState({isRefreshing: true});
    this.initData(() => {
      this.setState({isRefreshing: false});
    });
  }

  loadMoreData = () => {

    // AppService.getHomeData().then(data => {
    //   const newPost = this.state.posts.concat(data);
    //   this.setState({
    //     posts: newPost,
    //   }); 
    // }).catch(err => {
    //   Alert.alert(err);
    // });

  }

  componentDidMount() {
    this.initData(null);
  }

  initData = (callback) => {
    AppService.getHomeData().then(data => {
      this.setState({
        posts: data
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
    const {navigate} = this.props.navigation;

    return (
      <View style = {styles.screen}>
        <FlatList

          onEndReached = {this.loadMoreData}
          onEndReachedThreshold = {0} 

          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh}
            />
          }

          data = {this.state.posts}
          renderItem={({item, index}) => index === 0 ?
            <FeaturePost
              post = {item}
              onPress={() => navigate('PostDetail', {postId: item.id})}
            />
            :
            <Post
              post = {item}
              onPress={() => navigate('PostDetail', {postId: item.id})}
            />
          }
          keyExtractor={(item) => item.id.toString()}
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