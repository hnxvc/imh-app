import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl, Button, Alert } from 'react-native';
import StyleCfgs from '../configs/StyleCfs';

import { FeaturePost, Post } from '../components/Index';

class HomeScreen extends Component {

  static navigationOptions =
  {
    header : null
  };

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      posts: [{key: 'Devin'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'}]
    };

    this.loadMoreData = this.loadMoreData.bind(this);
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
    const newPost = this.state.posts.concat(
    [{key: 'Devin'},
    {key: 'Jackson'},
  ]);

    this.setState({
      posts: newPost
    }); 

    // console.log('XXXXX === ', this.state.posts);

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
              onPress={() => navigate('PostDetail', {name: 'Jane'})}
            />
            :
            <Post
              onPress={() => navigate('PostDetail', {name: 'Jane'})}
            />
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