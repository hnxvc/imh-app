import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, RefreshControl } from 'react-native';
import StyleCfs from '../configs/StyleCfs';
class PostDetailScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: { marginTop: -10 },
  });

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
    return (
      <View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <Text style={styles.title}>The image name is resolved the same way JS modules are resolved.</Text>
          <View style={styles.meta}>
            <Text style={styles.date}>20/10/2019</Text>
            <Text style={styles.view}>2k Views</Text>
          </View>
          <Image 
            source={require('../../assets/imgs/bg.jpg')}
            style={styles.image}
          />
          <View style={styles.wrapContent}>
            <Text style={styles.content}>
              {`This page will help you install and build your first React Native app. If you already have React Native installed, you can skip ahead to the Tutorial.

If you are coming from a web background, the easiest way to get started with React Native is with Expo tools because they allow you to start a project without installing and configuring Xcode or Android Studio. Expo CLI sets up a development environment on your local machine and you can be writing a React Native app within minutes. For instant development, you can use Snack to try React Native out directly in your web browser.

If you are familiar with native development, you will likely want to use React Native CLI. It requires Xcode or Android Studio to get started. If you already have one of these tools installed, you should be able to get up and running within a few minutes. If they are not installed, you should expect to spend about an hour installing and configuring them.`}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  title: {
    fontSize: StyleCfs.heading,
    paddingTop: StyleCfs.padding,
    paddingBottom: StyleCfs.padding,
    paddingLeft: StyleCfs.padding,
    paddingRight: StyleCfs.padding,
    fontFamily: StyleCfs.familyBold,
    color: StyleCfs.darkColor
  },
  meta: {
    paddingTop: StyleCfs.padding,
    paddingBottom: StyleCfs.padding,
    paddingLeft: StyleCfs.padding,
    paddingRight: StyleCfs.padding,
    flexDirection: 'row',
    fontSize: StyleCfs.meta,
    color: StyleCfs.greyColor
  },
  date: {
    flexGrow: 1,
    color: StyleCfs.greyColor,
    fontFamily: StyleCfs.family
  },
  view: {
    flexGrow: 1,
    textAlign: 'right',
    color: StyleCfs.greyColor,
    fontFamily: StyleCfs.family
  },
  image: {
    width: '100%',
    height: 200
  },
  wrapContent: {
    paddingTop: StyleCfs.padding,
    paddingBottom: StyleCfs.padding,
    paddingLeft: StyleCfs.padding,
    paddingRight: StyleCfs.padding,
  },
  content: {
    fontSize: 18,
    fontFamily: StyleCfs.family,
    color: StyleCfs.darkColor
  }
})

export default PostDetailScreen;