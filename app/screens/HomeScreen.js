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
      refreshing: false,
      posts: []
    };

    this.loadMoreData = this.loadMoreData.bind(this);
    this.initData = this.initData.bind(this);
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    setTimeout(() => {
      this.setState({refreshing: false});
    }, 1000);
    // fetchData().then(() => {
    //   this.setState({refreshing: false});
    // });
  }

  loadMoreData() {

    // this.setState({
    //   posts: newPost
    // }); 

    // console.log('XXXXX === ', this.state.posts);

  }

  componentDidMount() {
    this.initData();
  }

  initData() {
    AppService.getHomeData().then(data => {
      this.setState({
        posts: data
      });
      console.log('REMOVEME ==== data', data);
      
    }).catch(err => {
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
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
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