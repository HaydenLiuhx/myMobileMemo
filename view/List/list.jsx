import React from 'react'
import {View, Text, Button} from 'react-native'

export default class List extends React.Component{
    componentDidMount = () => {
        let id = 0
        if (this.props.route) {
            alert(this.props.route.params.id)
        } else {
            alert('000')
        }
        
    }
    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>list</Text>
            </View>
        )
    }
}