import React from 'react';
import {AppRegistry, Platform, View, Text} from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

AppRegistry.registerComponent('example', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('example', {
    rootTag: document.getElementById('root'),
  });
}
