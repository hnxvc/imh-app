import { StyleSheet, Text, View, StatusBar} from 'react-native';
import React, { Component } from 'react';
import { Font } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import { 
  HomeScreen, 
  CategoriesScreen, 
  PostDetailScreen, 
  PostListScreen 
} from './app/screens/Index';
import StyleCfs from './app/configs/StyleCfs';

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  PostDetail: PostDetailScreen,
});

const PostListNavigator = createStackNavigator({
    PostList: PostListScreen,
    PostDetail: PostDetailScreen
  }
);

const CategoryNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    PostList: PostListNavigator
  },
  {
    headerMode: 'none'
  }
);

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
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'Categories') {
          iconName = 'ios-list';
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: StyleCfs.primaryColor,
      inactiveTintColor: StyleCfs.greyColor,
  }
});

const MainNavigagor = createAppContainer(bottomTabNavigator);

class App extends Component {

  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'ssp': require('./assets/fonts/SourceSansProRegular.ttf'),
      'sspb': require('./assets/fonts/SourceSansProSemiBold.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return null;
    }
    return (
        <View style={{
          flex: 1,
        }}>
          <StatusBar
            barStyle="dark-content"
          />
          <View style={styles.main}>
            <MainNavigagor/>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 20
  }
});

export default App;