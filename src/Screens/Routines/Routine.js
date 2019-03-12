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
        alignItems: 'center',
    },
    editIcon: {
        color: "#21CE99",
        marginRight: 10,
    },
    cardStyle: {
        backgroundColor: 'white',
        margin: 20,
    },
    footerContainer: {
        backgroundColor: '#2D2D34',
        color: '#21CE99'
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
            <Container style={styles.container}>
                <StatusBar barStyle="light-content"/>

            </Container>
        );
    }
}

export default Routine;