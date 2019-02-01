import React from 'react';
import { StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
