import React, { Component } from 'react';
import { StyleSheet, StatusBar, Dimensions, TouchableHighlight } from 'react-native';

import { PropTypes } from 'prop-types';
import { Container, Icon, Content, H2, Text, Footer, FooterTab, Button } from 'native-base';
import { LineChart } from 'react-native-chart-kit';
import CardView from 'react-native-cardview';
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
        textDecorationLine: 'underline',
    },
    cardStyle: {
        backgroundColor: 'white',
        margin: 20,
    },
});
class Routine extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    
    render() {
        return (
            <Container style={styles.container} onPress={() => {alertUnfinished()}}>
                <StatusBar barStyle="light-content"/>
                    <Text style={styles.startText} onPress={() => {alertUnfinished()}}>
                        Get Started
                    </Text>

                    <Icon type="Ionicons" name="md-add" style={styles.startText} onPress={() => {alertUnfinished()}}></Icon>
            </Container>
        );
    }
}

export default Routine;