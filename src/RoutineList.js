import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';

import { List, Icon, Container, Header, Tab, Tabs, Form, Text, Input, Item, Label, Content, Title, Body, Button, CheckBox, ListItem, Left, Right } from 'native-base';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton : {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
    },
});

class RoutineList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            hidePassword: true,
            modalVisible: false,
        }
    }

    static navigationOptions = {
        title: 'Routines',
        /* No more header config here! */
        headerRight: (
            <Icon type="SimpleLineIcons" name="user" size={24} color="green" />
        ),
      };

    alert = () => {
        // Works on both iOS and Android
        Alert.alert(
            'Good Luck With That',
            'There is no back-end lol.',
            [
            {text: 'Profile', onPress: () => console.log('Profilepressed')},
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
        );
    }

    render() {

        const { hidePassword } = this.state;

        const static_list = 
            [
                'Routine 1',
                'Routine 2',
                'Routine 3',
                'Routine 4',
            ];

        return (
            

            <Container>
                
                {/* <Header>
                    <Left>
                        <Icon type="Ionicons" name="ios-add" color="blue"></Icon>
                    </Left>
                    <Body>
                        <Title>My Routines</Title>
                    </Body>
                    <Right>
                    <Icon type="SimpleLineIcons" name="user" size={24} color="green" />
                    </Right>
                </Header> */}
                <Content>
                    <List>
                    {static_list.map((exercise, i) => (
                        <ListItem key={i}>
                            <Left>  
                                <Text>{exercise}</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    ))}
                                    
                    </List>
                </Content>
            </Container>
        );
    }
}

export default RoutineList;