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

export default class Constants extends Component {
    constructor(props) {
        super(props);
    }
}