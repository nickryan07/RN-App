import React, { Component } from 'react';
import { StyleSheet, View, Modal, TouchableHighlight, Alert } from 'react-native';

import { Container, Header, Tab, Tabs, TabHeading, Icon, Form, Text, Input, Item, Label, Content, ScrollableTab, Title, Body, Button, CheckBox, ListItem, Radio, Left, Right } from 'native-base';

import PropTypes from 'prop-types';

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
    yellowColor: {
        backgroundColor: '#FFFC00',
    }
});

class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontsLoaded: false,

            text: '',
            hidePassword: true,
            modalVisible: false,
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
        });
        this.setState({fontsLoaded: true});
    }

    static navigationOptions = {
        title: 'Home',
        /* No more header config here! */
    };

    alert = () => {
        // Works on both iOS and Android
        Alert.alert(
            'Good Luck With That',
            'There is no back-end lol.',
            [
            {text: 'Create Account', onPress: () => this.props.navigation.navigate('RoutineList')/*console.log('Create Account pressed')*/},
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => /*console.log('OK Pressed')*/this.props.navigation.navigate('Profile')},
            ],
            {cancelable: false},
        );
    }

    render() {
        const { hidePassword, fontsLoaded } = this.state;

        if(!fontsLoaded) {
            return ( <Expo.AppLoading /> );
        }

        return (
            

            <Container>
                <Content style={styles.yellowColor}>
                    <Tabs>
                        <Tab heading="Tab 1">
                            <Container>
                                <Content padder>
                                    <Form>
                                        <Item floatingLabel>
                                            <Label>
                                                Username
                                            </Label>
                                            <Input/>
                                        </Item>
                                        <Item floatingLabel>
                                            <Label>
                                                Password
                                            </Label>
                                            <Input secureTextEntry={hidePassword}/>
                                        </Item>
                                        <ListItem>
                                            <Left>
                                                <Text>Hide password?</Text>
                                            </Left>
                                            <Right>
                                                <CheckBox checked={hidePassword} onPress={() => {this.setState({hidePassword: !hidePassword})}}/>
                                            </Right>
                                        </ListItem>
                                        <Container style={styles.loginButton}>
                                            <Content padder style={styles.button}>
                                                <Button onPress={() => {this.alert()}}>
                                                    <Text>
                                                        Login
                                                    </Text>
                                                </Button>
                                            </Content>
                                        </Container>
                                    </Form>
                                </Content>
                            </Container>
                        </Tab>
                        <Tab heading="Tab 2">
                        </Tab>
                        <Tab heading="Tab 3">
                        </Tab>
                    </Tabs>
                </Content>
            </Container>
        );
    }
}

export default Homepage;