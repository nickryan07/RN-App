import React from 'react';
import Alert from 'react-native';
import Meteor, { withTracker } from 'react-native-meteor'

import configuration from './config';

import getTheme from './native-base-theme/components';
import variables from "./native-base-theme/variables/commonColor";
import { StyleProvider } from 'native-base';
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
            <StyleProvider style={getTheme(variables)}>
                <Router />
            </StyleProvider>
        );
    }
}

export default withTracker( () => {
    //Meteor.subscribe('getUser')
    return {
        //users: Meteor.collection('users').find({})
    }
})(App);

//   export default withTracker(params => {
//     const handle = Meteor.subscribe('todos');
//     Meteor.subscribe('settings');
  
//     return {
//       todosReady: handle.ready(),
//       settings: Meteor.collection('settings').findOne(),
//     };
//   })(App);
