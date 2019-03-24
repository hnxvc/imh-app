import React, { Component } from 'react';
import { View, Text, FlatList, RefreshControl, StyleSheet, Alert } from 'react-native';
import { Post } from '../components/Index';
import StyleCfs from '../configs/StyleCfs';
import { AppService } from '../services/app-services';

class PostListScreen extends Component {
  static navigationOptions =
  {
    header : null
  };
  
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
    };
    this.initData = this.initData.bind(this);
  }

  onRefresh = () => {
    this.setState({isRefreshing: true});
    this.initData(() => {
      this.setState({isRefreshing: false});
    });
  }

  componentDidMount() {
    this.initData(null);
  }

  initData(callback) {
    const categoryId = this.props.navigation.getParam('categoryId');
    AppService.getPosts(categoryId).then(data => {
      this.setState({
        posts: data
      });
      if(callback) {
        callback();
      }
    }).catch(err => {
      if(callback) {
        callback();
      }
      Alert.alert(err);
    });
  }

  renderHeader(categoryTitle) {
    return <Text style={styles.title}>{categoryTitle}</Text>;
  }

  render() {
    const {navigate} = this.props.navigation;
    const categoryTitle = this.props.navigation.getParam('categoryTitle');
    
    return (
      <View>
        <FlatList
          ListHeaderComponent={this.renderHeader(categoryTitle)}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh}
            />
          }

          data = {this.state.posts}
          renderItem={({item}) => 
            <Post
              post = {item}
              onPress={() => navigate('PostDetail', {postId: item.id})}
            />
          }
          keyExtractor = {item => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingTop: StyleCfs.padding,
    marginTop: -8,
    paddingBottom: StyleCfs.padding,
    paddingLeft: StyleCfs.padding,
    paddingRight: StyleCfs.padding,
    fontSize: StyleCfs.heading,
    fontFamily: StyleCfs.familyBold,
    color: StyleCfs.primaryColor
  }
});

export default PostListScreen;