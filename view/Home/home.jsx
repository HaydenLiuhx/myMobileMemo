import * as React from "react";
import { Button, View, Text, StyleSheet, Image, Dimensions, TextInput, StatusBar, ScrollView, TouchableWithoutFeedback } from "react-native";
// import { AppRegistry } from "react-native";
import { categories } from '../../mock/dataArray'
export default class Home extends React.Component {
    // static navigationOptions={
    //     headerStyle: { height:0, backgroundColor:'#000'}
    // }
    state={
        categories: [],
    }
    handleItemClick = (id) => {
        const {navigate} = this.props.navigation
        navigate('List' , {id: id})
    }
    componentDidMount = () => {
      //   fetch('https://liuhuangxun.com/list.json')
      //   .then((res) => res.json())
      //   .then(this.handleGetListSuccess)
      //   .catch(()=>{alert('Request Exception!')})
    };
    render() {
        const {width} = Dimensions.get('window')
        const itemWidth = (width-20)/3
      return (
              <View style={styles.container}>
                  <StatusBar barStyle='dark-content'></StatusBar>
                  <Image style={{width: 414, height: 280}} source={require('../../resource/imgs/home-banner1.png')} />
                  <TextInput underlineColorAndroid='#fff' style={[styles.search, {top:240}]} placeholder="Please input search content:"></TextInput>
                  <ScrollView style={[styles.content, {margin:8}]}>
                      <View style={styles.list}>
                          {
                              categories.map((item)=>{
                                  return(
                                    <TouchableWithoutFeedback onPress={()=>this.handleItemClick(item.id)} key={item.id}>
                                      <View 
                                          style={[{width: itemWidth}, styles.item]}
                                      >
                                          <Image source={{uri: item.photo_url}} style={[{width: (itemWidth-20), height: (itemWidth-20)},styles.img]} />
                                          <View >
                                              <Text style={styles.itemTitle}>{item.name}</Text>
                                          </View>
                                      </View>
                                    </TouchableWithoutFeedback>
                                  )
                              })
                          }
                      </View>
                  </ScrollView>
              </View>
              
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#eee",
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
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
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item:{
        display:'flex',
    },
    img: {
        marginLeft: 12,
        marginTop: 7,
        borderRadius: 20,
    },
    itemTitle: {
        textAlign:'center',
        lineHeight: 30,
    }
  });