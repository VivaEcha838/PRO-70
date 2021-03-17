import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen'
import WriteStoryScreen from './screens/WriteStoryScreen'


export default class App extends React.Component {
  render(){
   return (
    <View style={styles.container}>
      
    </View>
  );
}
}

var AppNavigator = createBottomTabNavigator({
  WriteStoryScreen: WriteStoryScreen,
  ReadStoryScreen: ReadStoryScreen
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
