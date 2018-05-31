import React , { Component } from "react" 
import { StyleSheet ,View} from 'react-native'

import {  Header, Input , Icon , Item , Button , Text , Tab, Tabs, ScrollableTab , Content,Drawer } from "native-base" 


export default class header extends Component{
  openDrawer() {
    this.props.parentApp.drawer._root.open()
  };
  render(){
        
    return (
          
          <Header searchBar rounded span noShadow style={Styles.Search}>
            <Item style={{margin:0}}>
              <Icon name="md-menu" onPress={()=>this.openDrawer()}/>
              <Input placeholder="Search"/>
              <Icon name="md-mic" />
            </Item>
            
            <Tabs renderTabBar={()=> <ScrollableTab />} >
              <Tab heading="BERANDA" tabStyle={{ backgroundColor:"#4caf50"}} activeTabStyle={{ backgroundColor:"#4caf50"}} textStyle={{ color : "white"}}>
                  
              </Tab>
              <Tab heading="GAME" tabStyle={{ backgroundColor:"#4caf50"}} activeTabStyle={{ backgroundColor:"#4caf50"}} textStyle={{ color : "white"}}>
                  
              </Tab>
              <Tab heading="FILM" tabStyle={{ backgroundColor:"#4caf50"}} activeTabStyle={{ backgroundColor:"#4caf50"}} textStyle={{ color : "white"}}>
                  
              </Tab>
              <Tab heading="BUKU" tabStyle={{ backgroundColor:"#4caf50"}} activeTabStyle={{ backgroundColor:"#4caf50"}} textStyle={{ color : "white"}}>
                  
              </Tab>
              <Tab heading="KIOS" tabStyle={{ backgroundColor:"#4caf50"}} activeTabStyle={{ backgroundColor:"#4caf50"}} textStyle={{ color : "white"}}>
                  
              </Tab>
            </Tabs> 
          </Header>
        
    )
  }
}

const Styles = StyleSheet.create({
  Search : { 
    backgroundColor : "#4caf50" , 
    paddingTop : 30, 
    flexDirection: 'column',
  }
})