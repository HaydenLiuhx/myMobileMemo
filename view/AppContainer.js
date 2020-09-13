import * as React from "react";
import Detail from './Detail/detail'
import Home from "./Home/home";
import HomeStackScreen from "./Home/home-stack"
import My from "./My/my";
import Setting from './Setting/setting'
import List from './List/list'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
class AppContainer extends React.Component {
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
            component={HomeStackScreen}
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
  export default AppContainer;
 
