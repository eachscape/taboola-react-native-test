/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import AppNavigation from './src/navigation/Navigation';

const App: () => React$Node = () => {
  return (<AppNavigation/>);
};

export default App;
