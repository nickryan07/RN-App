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
class RoutineLog extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    
    render() {
        return (
            <Container style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <Content>
                    <Calendar
                        // Initially visible month. Default = Date()
                        // current={'2012-03-01'}
                        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                        minDate={'2010-05-10'}
                        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                        maxDate={'2020-05-30'}
                        // Handler which gets executed on day press. Default = undefined
                        onDayPress={(day) => {console.log('selected day', day)}}
                        // Handler which gets executed on day long press. Default = undefined
                        onDayLongPress={(day) => {console.log('selected day', day)}}
                        style={{
                            width: Dimensions.get('window').width
                        }}
                        theme={{
                            backgroundColor: '#2D2D34',
                            calendarBackground: '#2D2D34',
                            textSectionTitleColor: '#b6c1cd',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#21CE99',
                            dayTextColor: '#d9e1e8',
                            textDisabledColor: '#2d4150',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                            arrowColor: '#21CE99',
                            monthTextColor: '#21CE99',
                          }}
                        />
                </Content>
            </Container>
        );
    }
}


export default RoutineLog;