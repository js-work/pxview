import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import RecommendedIllust from './RecommendedIllust';
import RecommendedManga from './RecommendedManga';
import Header from '../components/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class Home extends Component {
  componentDidMount() {
    // hack for android for nested tabs https://github.com/skv-headless/react-native-scrollable-tab-view/issues/215
    if (Platform.OS === 'android') {
      setTimeout(() => this.tabs.goToPage(0), 0);
    }
  }
  render() {
    //console.log("render home ", this.props)
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Welcome to React Native!
    //     </Text>
    //     <Text style={styles.instructions}>
    //       To get started, edit index.ios.js
    //     </Text>
    //     <Text style={styles.instructions}>
    //       Press Cmd+R to reload,{'\n'}
    //       Cmd+D or shake for dev menu
    //     </Text>
    //   </View>
    // );
    return (
      <Header>
        <View style={styles.container}>
          <ScrollableTabView ref={(ref) => this.tabs = ref} locked scrollWithoutAnimation>
            <RecommendedIllust tabLabel="Illustrations" />
            <RecommendedManga tabLabel="Manga" />
          </ScrollableTabView>
        </View>
      </Header>
    );
  }
}

export default Home;