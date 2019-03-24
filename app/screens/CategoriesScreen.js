import React, { Component } from 'react';
import { View, Alert, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { Category } from '../components/Index';
import { AppService } from '../services/app-services';

class CategoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      categories: []
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
    AppService.getCategories().then(data => {
      this.setState({
        categories: data
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
      <View
        style={styles.wrap} 
      >
        <FlatList 
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              Refresh={this._onRefresh}
            />
          }

          data = {this.state.categories} 
          renderItem = {({item}) => <Category 
            category={item}
            onPress={() => navigate('PostList', {categoryId: item.id})}
          />}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          numColumns = {2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center'
  }
})

export default CategoriesScreen;