import React, { Component } from 'react';
import './App.css';
import CuisineComposer from './containers/CuisineComposer.js'
import { View, Text, Image } from "react-native";


class App extends Component {
  render() {
    return (
      <View className="App">
        <View className="App-header">
          <Image source={require('./logo.svg')} />
          <Text className="App-title">Welcome to React</Text>
        </View>

        <CuisineComposer />
      </View>
    );
  }
}

export default App;
