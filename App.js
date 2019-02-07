import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';

import TextCounter from './TextCounter';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextCounter limit={50} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 5,
    paddingLeft: 15,
    paddingRight: 15
  },
});
