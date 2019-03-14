import React, { Component } from 'react';
import { StyleSheet, Alert, StatusBar } from 'react-native';
import Meteor, { Accounts, withTracker } from 'react-native-meteor';

import { Container, H2, Icon, Form, Text, Input, Item, Content, Button, ListItem, Left, Right, Card } from 'native-base';

import PropTypes from 'prop-types';
import CardView from 'react-native-cardview';
import { Switch } from 'react-native-base-switch';
import { alertAPI } from '../../Constants';

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
        backgroundColor: '#2D2D34',
    }
});

class CreateAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {

            email: '',
            username: '',
            password: '',
            hidePassword: true,

        }
    }

    componentDidMount() {
        
    }

    addUser = () => {
        const { email, username, password } = this.state;

        const data = {
            email: email,
            username: username,
            password: password,
        }

        Accounts.createUser(data, (error) => {
            if(error) {
                alertAPI(error.reason);
            } else {
                alertAPI('Success');
                
            }
            // } else {
            //     alertAPI('Success');
            // }
        });
    }

    handleEmailChange = (text) => {
        this.setState({email: text})
    }

    handleUsernameChange = (text) => {
        this.setState({username: text})
    }

    handlePasswordChange = (text) => {
        this.setState({password: text})
    }

    renderCreateForm = () => {
        const { hidePassword } = this.state;

        return (
            <Content padder style={styles.bgColor}>
                <Card
                style={{
                    backgroundColor: 'white',
                    margin: 20,
                }}>
                    <H2 style={styles.loginTitle}>
                        Create an Account
                    </H2>
                    <Form>
                        <Item rounded /*floatingLabel*/ style={styles.formField}> 
                            <Input placeholder="Email" keyboardType="email-address" value={this.state.email} textContentType="emailAddress" onChangeText={this.handleEmailChange}/>
                        </Item>
                        <Item rounded /*floatingLabel*/ style={styles.formField}>
                            <Input placeholder="Username" textContentType="username" value={this.state.username} onChangeText={this.handleUsernameChange}/>
                        </Item>
                        <Item rounded /*floatingLabel*/ style={styles.formField}> 
                            <Input placeholder="Password" secureTextEntry={hidePassword} textContentType="password" value={this.state.password} onChangeText={this.handlePasswordChange}/>
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
                    <Button rounded onPress={() => {this.addUser()}} style={styles.loginButton}>
                        <Text>
                            Create Account
                        </Text>
                    </Button>
                </Card>
            </Content>
        );
    }

    render() {

        return (
            <Container style={styles.screenContainer}>
                <StatusBar
                barStyle="light-content"
                />
                <Content>
                    {this.renderCreateForm()}
                </Content>
            </Container>
        );
    }
}

export default withTracker( () => {
    return {
        userId: Meteor.userId(),
        currentUser: Meteor.user(),
        isLoggingIn: Meteor.loggingIn()
    }
})(CreateAccount);