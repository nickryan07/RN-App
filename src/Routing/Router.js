import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Homepage from '../Screens/Login/Homepage';
import CreateAccount from '../Screens/Login/CreateAccount';
import Profile from '../Screens/Users/Profile';
import RoutineList from '../Screens/Routines/RoutineList';
import Routine from '../Screens/Routines/Routine';

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
        screen: CreateAccount,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: '#fff',
        }),
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
            headerLeft: (
                null
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