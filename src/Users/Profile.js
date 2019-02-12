import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import { Container, Header, Tab, Tabs, Form, Text, Input, Item, Label, Content, Title, Body, Button, CheckBox, ListItem, Left, Right, Icon } from 'native-base';

import CardView from 'react-native-cardview';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2D2D34',
    },
    userIcon: {
        color: "#21CE99",
        marginRight: 10,
    },
});

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    static navigationOptions = ({navigation}) => ({
        title: 'Profile',
        headerRight: (
            <Icon type="SimpleLineIcons" name="user" size={24} style={styles.userIcon} onPress={() => {navigation.navigate('Profile')}}/>
        ),
        mode: 'modal',
        headerStyle: {
            backgroundColor:  '#2D2D34',
            elevation: 0,
            borderBottomWidth: 0,
        },
        headerTintColor: '#21CE99',
        
        /* No more header config here! */
    });

    render() {

        const { hidePassword } = this.state;

        const static_list = 
            [
                'Type 1',
                'Type 2',
                'Type 3',
                'Type 4',
                'Type 5',
                'Type 6',
                'Type 7',
                'Type 8',
                'Type 9',
                'Type 10',
                'Type 11',
                'Type 12',
                'Type 13',
                'Type 14',
                'Type 15',
            ];

        return (
            <Container style={styles.container}>
            
                <Content>

                </Content>
                <StatusBar
                barStyle="light-content"
                />
            </Container>
        );
    }
}

export default Profile;