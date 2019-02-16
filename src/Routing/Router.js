import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Homepage from '../Login/Homepage';
import CreateAccount from '../Login/CreateAccount';
import Profile from '../Users/Profile';
import RoutineList from '../Routines/RoutineList';
import Routine from '../Routines/Routine';

import { Icon } from 'native-base';


const styles = StyleSheet.create({
    userIcon: {
        color: "#21CE99",
        marginRight: 10,
    },
});

const RouteStack = createStackNavigator({
    Homepage: { 
        screen: Homepage 
    },
    CreateAccount: {
        screen: CreateAccount 
    },
    Profile: { 
        screen: Profile 
    },
    RoutineList: { 
        screen: RoutineList,
        navigationOptions: ({ navigation }) => ({
            title: 'Routines',
            headerRight: (
                <Icon type="SimpleLineIcons" name="user" size={24} style={styles.userIcon} onPress={() => {navigation.navigate('Profile')}}/>
            ),
            mode: 'modal',
            headerStyle: {
                backgroundColor:  '#2D2D34',
                elevation: 0,
                borderBottomWidth: 0,
            },
            headerTintColor: '#21CE99',
            
            /* No more header config here! */
        }),
    },
    Routine: {
        screen: Routine
    },
}, {
    defaultNavigationOptions: {
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
    }
});

const Router = createAppContainer(RouteStack);

export default Router;