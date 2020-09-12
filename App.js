import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions, TextInput, StatusBar, ScrollView } from "react-native";
//import { Carousel } from "@ant-design/react-native";
import { AppRegistry } from "react-native";
export default class App extends React.Component {
  state={
      categories: [],

  }
  handleGetListSuccess = (res) => {
      alert(JSON.stringify(res))
  }
  componentDidMount = () => {
      fetch('https://facebook.github.io/react-native/movies.json')
      .then((res) => res.json())
      .then(this.handleGetListSuccess)
      .catch(()=>{alert('Request Exception!')})
  };
  render() {
    //   const {width} = Dimensions.get('window')
    //   alert(width)
    return (
      <View style={styles.container}>
          <StatusBar barStyle='dark-content'></StatusBar>
        <Image style={{width: 414, height: 280}} source={require('./resource/imgs/home-banner1.png')} />
        <TextInput underlineColorAndroid='#fff' style={[styles.search, {top:240}]} placeholder="Please input search content:"></TextInput>
        <ScrollView style={[styles.content, {margin:8}]}>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  search: {
    position: 'absolute',
    left: 70,
    right: 70,
    height: 30,
    lineHeight: 18,
    backgroundColor: '#fff',
    borderRadius:20,
    paddingLeft:10,
  },
  content: {
      flex: 1,
      backgroundColor: '#fff',
      marginBottom: 60,
  }
});
AppRegistry.registerComponent("App", () => App);
