import React from 'react';
import Alert from 'react-native';
import Meteor, { withTracker } from 'react-native-meteor';

import configuration from './config';

import getTheme from './native-base-theme/components';
import variables from "./native-base-theme/variables/commonColor";
import { StyleProvider, Root } from 'native-base';
import Router from './src/Routing/Router';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    

    componentWillMount() {
        Meteor.connect(configuration.apiUrl)
    }

    render() {
        return (
            <Root>
                <StyleProvider style={getTheme(variables)}>
                    <Router />
                </StyleProvider>
            </Root>
        );
    }
}

export default withTracker( () => {
    return {
        currentUser: Meteor.user(),
    }
})(App);
