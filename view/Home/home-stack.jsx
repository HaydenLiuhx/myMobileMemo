import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home'
import List from '../List/list'
import ListOne from '../List/list-1'

const HomeStack = createStackNavigator();

export default class HomeStackScreen extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <HomeStack.Navigator
                headerMode="float" 
                initialRouteName="Home"
                screenOptions={{
                }}
            >
                <HomeStack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{headerStyle:{height:0,backgroundColor:'#000'}}}
                />
                <HomeStack.Screen 
                    name="List" 
                    component={List} 
                    options={{
                        title:'List',
                        headerStyle: {
                            backgroundColor: '#531dab'
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        }
                    }}
                />
                <HomeStack.Screen name="ListOne" component={ListOne} />
            </HomeStack.Navigator>
        );
    }
}