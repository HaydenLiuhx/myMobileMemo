import * as React from "react";
 import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Detail from './view/Detail/detail'
import Home from "./view/Home/home";
import My from "./view/My/my";
import Setting from './view/Setting/setting'
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
              activeTintColor: '#eb2f96',
              inactiveTintColor: 'gray',
            }}
        >
          <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-home" tintColor='#eb2f96' color="#722ed1" size={30} />
              ),
            }}
          />
          <Tab.Screen name="Detail" component={Detail} 
            name="Detail" 
            component={Detail} 
            options={{
              tabBarLabel: 'Detail',
              tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-today" tintColor='#eb2f96' color="#722ed1" size={30} />
              ),
            }}
          />
          <Tab.Screen name="My" component={My} 
            name="My" 
            component={My} 
            options={{
              tabBarLabel: 'My',
              tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-person" tintColor='#eb2f96' color="#722ed1" size={30} />
              ),
            }}
          />
          <Tab.Screen name="Setting" component={Setting} 
            name="Setting" 
            component={Setting} 
            options={{
              tabBarLabel: 'Setting',
              tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-settings" tintColor='#eb2f96' color="#722ed1" size={30} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
  export default App;
 
