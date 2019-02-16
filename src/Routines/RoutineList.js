import React, { Component } from 'react';
import { StyleSheet, Alert, StatusBar } from 'react-native';
import Meteor, { withTracker } from 'react-native-meteor';
import { withNavigation } from 'react-navigation';

import { List, Icon, Container, Header, Tab, Tabs, Form, Text, Input, Item, Label, Content, Title, Body, Button, CheckBox, ListItem, Left, Right } from 'native-base';
import { alertUnfinished } from '../Constants';

import Dialog from 'react-native-dialog';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2D2D34',
    },
    loginButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    listHeader: {
        backgroundColor: '#2D2D34',
        paddingBottom: 10,
    },
    userIcon: {
        color: "#21CE99",
        marginRight: 10,
    },
    arrowIcon: {
        color: "#21CE99",
    },
    addIcon: {
        color: "#21CE99",
        marginRight: 10,
        marginLeft: 20,
    },
    text: {
        color: "#fff",
    },
});

class RoutineList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            routineList: [],
            hidePassword: true,
            showingAddRoutine: false,
            newRoutineName: '',
        }
        
        this.navigationOptions = ({navigation}) => ({
            title: this.props.currentUser,//'Routines',
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
        });
    }

    handleTextChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    addRoutine = () => {
        const { routineList, newRoutineName, showingAddRoutine } = this.state;

        var localList = routineList;
        localList.push(newRoutineName);
        this.setState({
            showingAddRoutine: !showingAddRoutine,
            routineList: localList,
            newRoutineName: '',
        });
    }

    renderAddRoutine = () => {
        const { showingAddRoutine } = this.state;
        

        /*const blurComponentIOS = (
            <BlurView
                style={StyleSheet.absoluteFill}
                blurType="xlight"
                blurAmount={50}
            />
        );*/

        return (
            <Dialog.Container /*blurComponentIOS={blurComponentIOS}*/ visible={showingAddRoutine}>
                <Dialog.Title>
                    Add Routine
                </Dialog.Title>
                <Dialog.Description>
                    Add a new routine to begin building your plan.
                </Dialog.Description>
                <Dialog.Input onChangeText={(newRoutineName) => this.setState({newRoutineName})} placeholder="Routine Name" />
                <Dialog.Button label="Cancel" onPress={() => {this.setState({showingAddRoutine: !showingAddRoutine})}}/>
                <Dialog.Button label="Add" onPress={() => {this.addRoutine()}}/>
            </Dialog.Container>
        );
    }

    render() {

        const { showingAddRoutine, routineList } = this.state;
        const { navigate } = this.props.navigation;

        return (
            <Container style={styles.container}>
            
                {this.renderAddRoutine()}
                <Header searchBar rounded style={styles.listHeader}>
                    <Item>
                        <Icon name="ios-search" />
                        <Input
                            onChangeText={() => {}} // <-- Here
                            placeholder="Search"
                        />
                    </Item>
                    <Icon type="MaterialIcons" name="playlist-add" size={24} style={styles.addIcon} onPress={() => {this.setState({showingAddRoutine: !showingAddRoutine})}}/>
                 
                </Header>
                <Content>
                    <List>
                    {routineList.map((routine, i) => (
                        <ListItem key={i} onPress={() => {navigate('Routine', {routineName: ''})}}>
                            <Left>  
                                <Text style={styles.text}>{routine}</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" style={styles.arrowIcon}/>
                            </Right>
                        </ListItem>
                    ))}
                    {   
                        Meteor.collection('users').find({}).map((user, i) => (
                        <ListItem key={i} onPress={() => {navigate('Routine', {routineName: ''})}}>
                            <Left>  
                                <Text style={styles.text}>{user.username}</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" style={styles.arrowIcon}/>
                            </Right>
                        </ListItem>
                    ))}          
                    </List>
                </Content>
                <StatusBar
                barStyle="light-content"
                />
            </Container>
        );
    }
}

export default withTracker( () => {
    return {
        currentUser: Meteor.user(),
        isLoggingIn: Meteor.loggingIn()
    }
})(RoutineList);