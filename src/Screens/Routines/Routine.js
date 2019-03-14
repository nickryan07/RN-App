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
            type: 'Barbell',
            exercises: [],
        }
    }

    componentDidMount() {
        Meteor.call("getExercises", "Barbell", (err, res) => {
            if(err) {
                console.log(err);
            } else {
                //console.log(res);
                this.setState({exercises: res});
            }
        })
    }
    
    render() {
        const { exercises } = this.state;
        return (
            <Container style={styles.container} onPress={() => {alertUnfinished()}}>
                <StatusBar barStyle="light-content"/>
                <Form>
                    
                    <Picker
                    mode="dialog"
                    placeholder="Barbell"
                    iosIcon={<Icon name="arrow-down" style={styles.pickerIcon}/>}
                    headerStyle={{ backgroundColor: "#2D2D34" }}
                    headerBackButtonTextStyle={{ color: "#21CE99" }}
                    headerTitleStyle={{ color: "#21CE99" }}
                    selectedValue={this.state.selected}
                    itemTextStyle={{color: "#fff"}}
                    onValueChange={() => {}}
                    >
                        {exercises.map((exercise, i) => {
                            return <Picker.Item label={exercise.name} value={i} key={i}/>
                        })}
                    </Picker>
                    <Text style={styles.startText} onPress={() => {alertUnfinished()}}>
                        Get Started
                    </Text>

                    <Icon type="Ionicons" name="md-add" style={styles.startText} onPress={() => {alertUnfinished()}}></Icon>

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