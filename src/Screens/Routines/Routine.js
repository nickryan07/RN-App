import React, { Component } from 'react';
import { StyleSheet, StatusBar, Dimensions, TouchableHighlight } from 'react-native';

import Meteor, { withTracker } from 'react-native-meteor';

import { Container, Icon, Content, H2, Text, Footer, FooterTab, Button, Picker, Form } from 'native-base';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import { alertUnfinished } from '../../Constants';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2D2D34',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    startText: {
        color: 'gray',
        alignSelf: 'center',
        margin: 5,
    },
    cardStyle: {
        backgroundColor: 'white',
        margin: 20,
    },
    pickerIcon: {
        color: '#21CE99'
    }
});
class Routine extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    
    render() {
        const { exercises } = this.state;
        return (
            <Container style={styles.container} onPress={() => {alertUnfinished()}}>
                <StatusBar barStyle="light-content"/>
                <Form>
                    <Text style={styles.startText} onPress={() => {this.props.navigation.navigate('Exercises');}}>
                        Get Started
                    </Text>

                    <Icon type="Ionicons" name="md-add" style={styles.startText} onPress={() => {this.props.navigation.navigate('Exercises');}}></Icon>

                </Form>
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
})(Routine);