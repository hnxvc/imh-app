import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Category } from '../components/Index';
import StyleCfs from '../configs/StyleCfs';

class CategoriesScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    
    return (
      <View
        style={styles.wrap} 
      >
        <FlatList 
          data = {[
            {
              key: 1,
              title: 'Front End'
            },
            {
              key: 2,
              title: 'Back End'
            },
            {
              key: 3,
              title: 'Devops'
            },
            {
              key: 4,
              title: 'Wordpress'
            },
            {
              key: 5,
              title: 'Soft skills'
            },
            {
              key: 6,
              title: 'Life'
            },
            {
              key: 7,
              title: 'English'
            },
            {
              key: 8,
              title: 'Un Category'
            }
          ]} 
          renderItem = {({item}) => <Category 
            title={item.title} 
            onPress={() => navigate('PostList', {name: 'Jane'})}
          />}
          keyExtractor={(item) => item.key.toString()}
          horizontal={false}
          numColumns = {2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 8,
    paddingBottom: 5,
    alignItems: 'center'
  }
})

export default CategoriesScreen;