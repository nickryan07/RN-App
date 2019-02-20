import React, { Component } from 'react';
import { StyleSheet, StatusBar, Dimensions, TouchableHighlight } from 'react-native';

import { PropTypes } from 'prop-types';
import { Container, Icon, Content, H2, Text } from 'native-base';
import { LineChart } from 'react-native-chart-kit';
import CardView from 'react-native-cardview';

import { alertUnfinished } from '../../Constants';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2D2D34',
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
                </Content>
            </Container>
        );
    }
}

// Routine.propTypes = {
//     routineName: PropTypes.string.isRequired,
// }

export default Routine;