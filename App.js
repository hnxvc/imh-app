import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import { 
  HomeScreen, 
  CategoriesScreen, 
  PostDetailScreen, 
  PostListScreen 
} from './app/screens/Index';

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  PostDetail: PostDetailScreen
});


const PostListNavigator = createStackNavigator({
  PostList: PostListScreen,
  PostDetail: PostDetailScreen
});

const CategoryNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  PostList: PostListNavigator
});

const bottomTabNavigator = createBottomTabNavigator({
    Home: HomeNavigator,
    Categories: CategoryNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        // FIXME: change it work on ios, adroind
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'Settings') {
          iconName = 'ios-category';
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
  }
});

export default  createAppContainer(bottomTabNavigator);