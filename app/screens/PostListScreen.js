import React, { Component } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';

import { Post } from '../components/Index';
class PostListScreen extends Component {
  static navigationOptions =
  {
    header : null
  };
  
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
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

  render() {
    const {navigate} = this.props.navigation;
    
    return (
      <View>
        <Text>Post list</Text>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }

          data = {
            [
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'}
            ]
          }
          renderItem={({item, index}) => 
            <Post
              onPress={() => navigate('PostDetail', {name: 'Jane'})}
            />
          }
        />
      </View>
    );
  }
}

export default PostListScreen;