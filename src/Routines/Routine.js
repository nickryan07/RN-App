import React, { Component } from 'react';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';

import { PropTypes } from 'prop-types';
import { Container, Icon } from 'native-base';
import { LineChart } from 'react-native-chart-kit';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2D2D34',
    },
    userIcon: {
        color: "#21CE99",
        marginRight: 10,
    },
});
class Routine extends Component {
    constructor(props) {
        super(props);
        this.navigate = this.props.navigation.navigate;
        this.params = this.props.navigation.state.params;

        this.state = {

        }
    }

    static navigationOptions = {
        title: ``,
        headerRight: (
            <Icon type="SimpleLineIcons" name="user" size={24} style={styles.userIcon} onPress={() => {alertUnfinished()}}/>
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
                <LineChart
                    data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
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
                    width={Dimensions.get('window').width} // from react-native
                    height={220}
                    chartConfig={{
                    backgroundColor: '#21CE99',
                    backgroundGradientFrom: '#21CE99',
                    backgroundGradientTo: '#21CE99',
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

// Routine.propTypes = {
//     routineName: PropTypes.string.isRequired,
// }

export default Routine;