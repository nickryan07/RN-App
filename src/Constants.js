import React, { Component } from 'react';

import { Alert } from 'react-native';

export const alertUnfinished = () => {
    // Works on both iOS and Android
    Alert.alert(
        'In Progress',
        'Unfinished feature.',
        {cancelable: false},
    );
}

export const alertAPI = (err) => {
    // Works on both iOS and Android
    Alert.alert(
        'API Error!',
        `${err}`,
        [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
    );
}

export default class Constants extends Component {
    constructor(props) {
        super(props);
    }
}