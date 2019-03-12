import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Homepage from '../Screens/Login/Homepage';
import CreateAccount from '../Screens/Login/CreateAccount';
import Profile from '../Screens/Users/Profile';
import RoutineList from '../Screens/Routines/RoutineList';
import Routine from '../Screens/Routines/Routine';
import RoutineStatistics from '../Screens/Routines/RoutineStatistics';
import RoutineLog from '../Screens/Routines/RoutineLog';

import { Icon } from 'native-base';
import variables from "../../native-base-theme/variables/commonColor";


const styles = StyleSheet.create({
    userIcon: {
        color: variables.brandPrimary,
        marginRight: 10,
    },
    tabIcon: {
        color: variables.brandPrimary,
    }
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
        mode: 'modal',
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled: false,
            title: 'Routines',
            headerRight: (
                <Icon type="SimpleLineIcons" name="user" size={24} style={styles.userIcon} onPress={() => {navigation.navigate('Profile')}}/>
            ),
            headerLeft: (
                null
            ),
            headerStyle: {
                backgroundColor:  '#2D2D34',
                elevation: 0,
                borderBottomWidth: 0,
            },
            headerTintColor: variables.brandPrimary,
        }),
    },
    Routine: {
        screen: createBottomTabNavigator({
            Home: {
                screen: Routine,
                navigationOptions: ({ navigation }) => ({
                    title: 'Routine',
                }),
            },
            Stats: {
                screen: RoutineStatistics,
                navigationOptions: ({navigation}) => ({
                    title: 'Stats',
                }),
            },
            Log: {
                screen: RoutineLog,
                navigationOptions: ({navigation}) => ({
                    title: 'Log',
                }),
            }
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                let iconType = 'Ionicons';
                if (routeName === 'Home') {
                    iconName = `dumbbell`;
                    iconType= 'MaterialCommunityIcons';
                } else if (routeName === 'Log') {
                    iconName = `ios-options`;
                } else {
                    iconName = 'ios-stats';
                }
        
                // You can return any component that you like here!
                return <Icon type={iconType} name={iconName} size={25} style={styles.tabIcon} />;
                },
            }),
            tabBarOptions: {
                activeTintColor: variables.brandPrimary,
                inactiveTintColor: 'gray',
                style: {
                    backgroundColor: variables.containerBgColor
                }
            },
        }),
        navigationOptions: ({ navigation }) => ({
            title: navigation.getParam('routineName', ''),
            headerStyle: {
                backgroundColor:  variables.containerBgColor,
                elevation: 0,
                borderBottomWidth: 0,
            },
            headerTintColor: variables.brandPrimary,
        }),
    },
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor:  variables.containerBgColor,
            shadowColor: 'transparent',
            elevation: 0,
            borderBottomWidth: 0,
        },
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
        headerTintColor: variables.brandPrimary,
    }
});

const Router = createAppContainer(RouteStack);

export default Router;