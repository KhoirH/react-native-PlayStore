import React , { Component } from 'react'

import {  View,Text } from 'react-native'
import {  Container , Drawer } from 'native-base'

import ScreenOne from "./assets/templates/screenOne"
import ScreenTwo from "./assets/templates/screenTwo"
import ScreenFour from "./assets/templates/screenFour"
import ScreenThree from "./assets/templates/screenThree"
import ScreenFive from "./assets/templates/screenFive"
import SideBar from "./assets/templates/sidebar"

import { createStackNavigator } from 'react-navigation'

class mainScreen extends Component{
  state = {}
  closeDrawer() {
    this.drawer._root.close()
  };
  static navigationOptions = {
    header: null
  }
  render(){
    return(
      
      <Drawer
            ref={(ref) => { this.drawer = ref; }}
            content={<SideBar navigator={this.navigator} parent={this} />}
            onClose={() => this.closeDrawer()} 
            >

          <ScreenOne parent={this} />
      </Drawer>
      
    )
  }
}

class screenTwo extends Component{
  
  static navigationOptions = {
    header:null
  }
    
  render(){
    return(
      <ScreenTwo parent={this}/>
    )
  }
}
class screenThree extends Component{
  state = {}
  closeDrawer() {
    this.drawer._root.close()
  };
  
  static navigationOptions = {
    header:null
  }
  render(){
    return(
      <Drawer
            ref={(ref) => { this.drawer = ref; }}
            content={<SideBar navigator={this.navigator} parent={this} />}
            onClose={() => this.closeDrawer()} 

            >
        <ScreenThree parent={this}/>
      </Drawer>
      
    )
  }
}
class screenFour extends Component{
  
  
    
  static navigationOptions = {
    header:null
  }
  render(){
    return(
        <ScreenFour parent={this}/>
    ) 
  }
}
class screenFive extends Component{
  
  
    
  static navigationOptions = {
    header:null
  }
  render(){
    return(
        <ScreenFive parent={this}/>
    ) 
  }
  
}
const RootStack = createStackNavigator(
  {
    mainScreen,
    screenTwo,
    screenThree,
    screenFour,
    screenFive
  },
  {
    initialRouteName: 'mainScreen',
  }
);

export default class app extends Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return <RootStack />;
  }
}