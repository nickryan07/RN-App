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
class RoutineStatistics extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    
    render() {
        return (
            <Container style={styles.container}>
                <StatusBar barStyle="light-content"/>
                    <LineChart
                        data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                            data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                            ]
                        }]
                        }}
                        width={Dimensions.get('window').width*.9} // from react-native
                        height={220}
                        chartConfig={{
                        backgroundColor: '#fff',
                        backgroundGradientFrom: '#17906b',//#21CE99
                        backgroundGradientTo: '#4dd7ad',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 16
                        }}
                    />
            </Container>
        );
    }
}

export default RoutineStatistics;