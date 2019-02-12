import React, { Component } from 'react';
import { StyleSheet, Alert, StatusBar } from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';

import { Container, H2, Icon, Form, Text, Input, Item, Content, Button, ListItem, Left, Right } from 'native-base';

import CardView from 'react-native-cardview';
import { Switch } from 'react-native-base-switch';
import { alertAPI, alertUnfinished } from '../Constants';

const styles = StyleSheet.create({
    screenContainer: {
        flex:1,
        flexDirection: 'column',
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
    },
    cardStyle: {
        backgroundColor: 'white',
        margin: 20,
    },
});

class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontsLoaded: false,

            userString: 'Dev',
            password: 'dev',
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
        mode: 'modal',
        headerStyle: {
            backgroundColor:  '#21CE99',
            shadowColor: 'transparent',
            elevation: 0,
            borderBottomWidth: 0,
        },
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
        
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

    alertForgot = () => {
        // Works on both iOS and Android
        Alert.alert(
            'In Progress',
            'Unfinished feature.',
            {cancelable: false},
        );
    }

    handleUserChange = (text) => {
        this.setState({userString: text})
    }

    handlePasswordChange = (text) => {
        this.setState({password: text})
    }

    handleSignIn = () => {
        const { userString, password } = this.state;

        Meteor.loginWithPassword(userString, password, (error) => {
            if(error) {
                alertAPI(error.reason);
            } else {
                //alertUnfinished();
                this.props.navigation.navigate('RoutineList');
            }
        })
    }

    renderLoginForm = () => {
        const { hidePassword } = this.state;
        return (
            <Container style={styles.screenContainer}>
                <StatusBar
                barStyle="light-content"
                />
                <Content padder style={styles.bgColor}>
                    <CardView style={styles.cardStyle} cardElevation={12} cardMaxElevation={12} cornerRadius={15} cornerOverlap={false}>
                        <H2 style={styles.loginTitle}>
                            Sign In
                        </H2>
                        <Form>
                            <Item rounded /*floatingLabel*/ style={styles.formField}>
                                <Input placeholder="Username or Email" textContentType="username" value={this.state.userString} onChangeText={this.handleUserChange}/>
                            </Item>
                            <Item rounded /*floatingLabel*/ style={styles.formField}> 
                                <Input placeholder="Password" secureTextEntry={hidePassword} textContentType="password"  value={this.state.password} onChangeText={this.handlePasswordChange}/>
                            </Item>
                            <ListItem style={styles.formField}>
                                <Left>
                                    <Text>Show password?</Text>
                                </Left>
                                <Right>
                                    <Switch active={hidePassword} onChangeState={() => {this.setState({hidePassword: !hidePassword})}} inactiveButtonColor='#21CE99' inactiveButtonPressedColor='#21CE99'></Switch>
                                </Right>
                            </ListItem>
                            <ListItem style={styles.formField} onPress={() => {this.props.navigation.navigate('CreateAccount')}}>
                                <Left>
                                    <Text>Create Account</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />    
                                </Right>
                            </ListItem>
                            <ListItem style={styles.formField} onPress={() => {alertUnfinished()}}>
                                <Left>
                                    <Text>Forgot password</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                        </Form>
                        <Button rounded onPress={() => {
                            this.handleSignIn()
                            //this.props.navigation.navigate('RoutineList')
                        }} style={styles.loginButton}>
                            <Text>
                                Login
                            </Text>
                        </Button>
                    </CardView>
                </Content>
            </Container>
        );
    }

    render() {
        const { fontsLoaded } = this.state;

        if(!fontsLoaded) {
            return ( <Expo.AppLoading /> );
        }

        return (
            

            <Container style={styles.screenContainer}>
                <Content>
                    {this.renderLoginForm()}
                </Content>
            </Container>
        );
    }
}

export default Homepage;