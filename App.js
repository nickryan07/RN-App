import React from 'react';
import * as Expo from "expo";
import { StyleSheet, View } from 'react-native';
import {Container, Content, Header, Text } from 'native-base';

import Homepage from './src/Homepage'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fontsLoaded: false,
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
          });
          this.setState({ fontsLoaded: true });
    }

    loadFonts() {
        
    }
    render() {
        if(!this.state.fonstsLoaded) {
            return <Container>
                <Content>
                    <Header>
                        <Text>
                            {this.state.fontsLoaded}
                        </Text>
                    </Header>
                </Content>
            </Container>;
        }
        return (
            <Homepage />
        );
    }
}