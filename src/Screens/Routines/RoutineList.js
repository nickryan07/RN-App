import React, { Component } from 'react';
import { StyleSheet, Alert, StatusBar, ListView } from 'react-native';
import Meteor, { withTracker } from 'react-native-meteor';

import { List, Icon, Container, Header, Text, Input, Item, Content, Button, ListItem, Left, Right } from 'native-base';

import Dialog from 'react-native-dialog';
import { PulseIndicator } from 'react-native-indicators';

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
    listItem: {
        backgroundColor: '#2D2D34',
        paddingLeft: 5,
    },
    userIcon: {
        color: "#21CE99",
        marginRight: 10,
    },
    arrowIcon: {
        color: "#21CE99",
    },
    removeIcon: {
        color: "#ED1727",
    },
    addIcon: {
        color: "#21CE99",
        marginRight: 10,
        marginLeft: 20,
    },
    text: {
        color: "#fff",
    },
    listStyle: {
        paddingLeft: 5
    }
});

class RoutineList extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            hidePassword: true,
            showingAddRoutine: false,
            newRoutineName: '',
            searchText: '',
            isRemoving: false,
            routines: props.currentUser ? props.currentUser.profile.routines : [],
        }
    
    }

    componentDidMount() {
        //console.log(this.props.currentUser);
    }

    handleTextChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    removeRoutine = (routineToRemove, secId, rowId, rowMap) => {
        Alert.alert(
            'Delete a Routine',
            'Are you sure?',
            [
                {
                    text: 'Cancel',
                    onPress: () => {
                        if(routineToRemove === null) {
                            return;
                        }
                        rowMap[`${secId}${rowId}`].props.closeRow();
                        return;
                    },
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        if(routineToRemove === null) {
                            return;
                        }
                        Meteor.call('removeRoutine', routineToRemove._id, (err) => {
                            //console.log(err);
                        });
                        rowMap[`${secId}${rowId}`].props.closeRow();
                    },
                    style: 'destructive',
                },
            ],
            {cancelable: false},
        );
    }

    addRoutine = () => {
        const { newRoutineName, showingAddRoutine } = this.state;

        Meteor.call('insertRoutine', newRoutineName, (err) => {
            //console.log(err);
        });
        this.setState({
            showingAddRoutine: !showingAddRoutine,
            newRoutineName: '',
        });
    }

    renderAddRoutine = () => {
        const { showingAddRoutine } = this.state;

        return (
            <Dialog.Container visible={showingAddRoutine}>
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

    fetchRoutines = () => {
        const { searchText } = this.state;
        const routines = this.props.currentUser.profile.routines.filter((routine) => {
            return routine.name.toLowerCase().includes(searchText.toLowerCase());
        });
        return routines;
    }

    render() {

        const { showingAddRoutine, isRemoving, searchText } = this.state;
        const { navigate } = this.props.navigation;

        
        const BUTTONS = ["Add Routine", "Delete Routines", "Cancel"];
        const DESTRUCTIVE_INDEX = 1;
        const CANCEL_INDEX = 2;
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <Container style={styles.container}>
            
                {this.renderAddRoutine()}
                <Header searchBar rounded style={styles.listHeader}>
                    <Item>
                        <Icon name="ios-search" />
                        <Input
                            onChangeText={(searchText) => this.setState({searchText})}
                            placeholder="Search"
                            keyboardAppearance="dark"
                        />
                    </Item>
                    <Icon type="MaterialIcons" name="playlist-add" size={24} style={styles.addIcon} onPress={() => 
                        this.setState({ showingAddRoutine: !showingAddRoutine })
                    }/>
                 
                </Header>
                <Container scrollEnabled={false}>
                    {this.props.currentUser ? 
                    <List
                        leftOpenValue={0}
                        rightOpenValue={-75}
                        dataSource={this.ds.cloneWithRows(this.fetchRoutines())}
                        renderRow={data =>
                        <ListItem style={styles.listItem} onPress={() => navigate('Routine', {routineName: data.name})}>
                            <Left>
                                <Text style={styles.text}> {data.name} </Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" style={styles.arrowIcon}/>
                            </Right>
                        </ListItem>}
                        disableRightSwipe
                        renderRightHiddenRow={(data, secId, rowId, rowMap)=>
                        <Button full danger onPress={() => {this.removeRoutine(data, secId, rowId, rowMap)}}/*_ => this.deleteRow(secId, rowId, rowMap)}*/>
                            <Icon active name="trash" />
                        </Button>}
                    />
                    : <PulseIndicator color="#21CE99" />}
                </Container>
                <StatusBar
                barStyle="light-content"
                />
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
})(RoutineList);