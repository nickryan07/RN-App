import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';

import { Card, CardItem, Container, Header, Tab, Tabs, Form, Text, Input, Item, Label, Content, Title, Body, Button, CheckBox, ListItem, Left, Right } from 'native-base';

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

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            hidePassword: true,
            modalVisible: false,
        }
    }

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
            

            <Container>
                
                <Header>
                    <Body>
                        <Title>Homepage</Title>
                    </Body>
                </Header>
                <Content>
                {static_list.map((exercise, i) => (
                                        <Card key={i}>
                                            <CardItem>
                                                <Body>
                                                    <Text>
                                                        {exercise}
                                                    </Text>
                                                </Body>
                                            </CardItem>
                                        </Card>
                                    ))}
                                    {/* <Card>
                                        <CardItem>
                                        <Body>
                                            <Text>
                                                Item 1
                                            </Text>
                                        </Body>
                                        </CardItem>
                                    </Card> */}
                </Content>
            </Container>
        );
    }
}

export default Profile;