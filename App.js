import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from './screens/MainScreen/MainScreen';
import DetailScreen from './screens/DetailScreen/DetailScreen';
import {StatusBar} from 'react-native';

const AppNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
  },
  DetailScreen: {
    screen: DetailScreen,
  },
});

const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <AppContainer />
    </>
  );
}

export default App;
