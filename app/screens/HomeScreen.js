import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl, Button } from 'react-native';
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
      <View style = {styles.screen}>
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