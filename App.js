import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Constants } from 'expo';

import TodoList from './components/TodoList';

export default class App extends React.Component {

  state = {
    list: [
      {id: '1', text: 'abc'},
      {id: '2', text: 'def'}
    ]
  }

  render() {
    const {state} = this;
    return (
      <View style={styles.container}>
        <TodoList list={state.list} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight
  },
});
