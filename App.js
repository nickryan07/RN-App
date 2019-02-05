import React from 'react';
import Alert from 'react-native';

import getTheme from './native-base-theme/components';
import variables from "./native-base-theme/variables/commonColor";
import { StyleProvider } from 'native-base';
import Router from './src/Routing/Router';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    render() {
        return (
            <StyleProvider style={getTheme(variables)}>
                <Router />
            </StyleProvider>
        );
    }
}

