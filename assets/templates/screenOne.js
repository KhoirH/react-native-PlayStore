import React , { Component } from "react"
import { View , Text } from "react-native"

import {  Container } from 'native-base'

import Header from '../components/screen/one/header'
import Content from '../components/screen/one/content'
import Footer from '../components/screen/one/footer'

export default class beranda extends Component{
    render(){        
        
        return (
            <Container>
                <Header parentApp={this.props.parent}/>
                <Content parentApp={this.props.parent} />
                <Footer />
            </Container>
        )
    }

}