import React, { Component } from 'react';
import { StyleSheet, Alert, StatusBar } from 'react-native';

import { Container, H2, Icon, Form, Text, Input, Item, Content, Button, ListItem, Left, Right } from 'native-base';

import PropTypes from 'prop-types';
import CardView from 'react-native-cardview';
import { Switch } from 'react-native-base-switch';

const styles = StyleSheet.create({
    screenContainer: {
        flex:1,
        justifyContent: 'center',
    },
    loginTitle: {
        marginTop: 25,
        marginBottom: 15,
        alignSelf: 'center',
        color: '#21CE99'
    },
    loginButton: {
        margin: 20,
        alignSelf: 'center'
    },
    formField: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
    },
    bgColor: {
        backgroundColor: '#21CE99',
    }
});

class CreateAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {

            text: '',
            hidePassword: true,

        }
    }

    static navigationOptions = {
        mode: 'modal',
        headerStyle: {
            backgroundColor:  '#21CE99',
            
            shadowColor: 'transparent',
            elevation: 0,
            borderBottomWidth: 0,
        },
        headerLeftContainerStyle: {
            color: '#fff',
        },
        headerTintColor: 'white',
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
        
        /* No more header config here! */
    };

    render() {
        const { hidePassword } = this.state;

        return (
            <Container style={styles.screenContainer}>
                <StatusBar
                barStyle="light-content"
                />
                <Content>
                    <Container style={styles.screenContainer}>
                        <Content padder style={styles.bgColor}>
                            <CardView 
                            style={{
                                backgroundColor: 'white',
                                margin: 20,
                            }}
                            cardElevation={12}
                            cardMaxElevation={12}
                            cornerRadius={15}
                            cornerOverlap={false}>
                                <H2 style={styles.loginTitle}>
                                    Create an Account
                                </H2>
                                <Form>
                                    <Item rounded /*floatingLabel*/ style={styles.formField}> 
                                        <Input placeholder="Email" keyboardType="email-address" textContentType="emailAddress"/>
                                    </Item>
                                    <Item rounded /*floatingLabel*/ style={styles.formField}>
                                        <Input placeholder="Username" textContentType="username"/>
                                    </Item>
                                    <Item rounded /*floatingLabel*/ style={styles.formField}> 
                                        <Input placeholder="Password" secureTextEntry={hidePassword} textContentType="password"/>
                                    </Item>
                                    <ListItem style={styles.formField}>
                                        <Left>
                                            <Text>Show password?</Text>
                                        </Left>
                                        <Right>
                                            <Switch active={hidePassword} onChangeState={() => {this.setState({hidePassword: !hidePassword})}} inactiveButtonColor='#21CE99' inactiveButtonPressedColor='#21CE99'></Switch>
                                        </Right>
                                    </ListItem>
                                </Form>
                                <Button rounded onPress={() => {this.alert()}} style={styles.loginButton}>
                                    <Text>
                                        Create Account
                                    </Text>
                                </Button>
                            </CardView>
                        </Content>
                    </Container>
                </Content>
            </Container>
        );
    }
}

export default CreateAccount;