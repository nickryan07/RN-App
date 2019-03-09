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

    static navigationOptions = {
        title: ``,
        headerRight: (
            <Icon type="MaterialCommunityIcons" name="square-edit-outline" size={8} style={styles.editIcon} onPress={() => {alertUnfinished()}}></Icon>
        ),
        mode: 'modal',
        headerStyle: {
            backgroundColor:  '#2D2D34',
            elevation: 0,
            borderBottomWidth: 0,
        },
        headerTintColor: '#21CE99',
        
        /* No more header config here! */
    };
    
    render() {
        return (
            <Container style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <Content>
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
                        theme={{
                            backgroundColor: '#2D2D34',
                            calendarBackground: '#2D2D34',
                            textSectionTitleColor: '#b6c1cd',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#2D2D34',
                            dayTextColor: '#d9e1e8',
                            textDisabledColor: '#2d4150',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                            arrowColor: '#21CE99',
                            monthTextColor: '#21CE99',
                          }}
                        />
                </Content>
                <Footer style={styles.footerContainer}>
                    <FooterTab>
                        <Button vertical>
                            <Icon name="apps" />
                            <Text>Apps</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera" />
                            <Text>Camera</Text>
                        </Button>
                        <Button vertical active>
                            <Icon active name="navigate" />
                            <Text>Navigate</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

// Routine.propTypes = {
//     routineName: PropTypes.string.isRequired,
// }

export default Routine;