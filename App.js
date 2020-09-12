import * as React from "react";
import { View, Text } from "react-native";
//import { } from '@ant-design/react-native';
import { AppRegistry } from "react-native";
export default class App extends React.Component {
  state = {};
  componentDidMount = () => {};
  getListInfo() {}
  render() {
    return (
      <View style={{marginTop:20}}>
        <Text>Hello-World</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent("App", () => App);
