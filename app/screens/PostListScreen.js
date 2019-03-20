import React, { Component } from 'react';
import { View, Text, FlatList, RefreshControl, StyleSheet } from 'react-native';

import { Post } from '../components/Index';
import StyleCfs from '../configs/StyleCfs';
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

  renderHeader() {
    return <Text style={styles.title}>Wordpress</Text>;
  }

  render() {
    const {navigate} = this.props.navigation;
    
    return (
      <View>
        <FlatList
          ListHeaderComponent={this.renderHeader}
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

const styles = StyleSheet.create({
  title: {
    paddingTop: StyleCfs.padding,
    paddingBottom: StyleCfs.padding,
    paddingLeft: StyleCfs.padding,
    paddingRight: StyleCfs.padding,
    fontSize: StyleCfs.heading
  }
});

export default PostListScreen;