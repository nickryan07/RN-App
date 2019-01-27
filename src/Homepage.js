import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Container, Header, Tab, Tabs, TabHeading, Icon, Form, Text, Input, Item, Label, Content, ScrollableTab, Title, Body, Button, CheckBox, ListItem, Radio, Left, Right } from 'native-base';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton : {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
    },
});

class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            hidePassword: true,
        }
    }

    render() {
        const { hidePassword } = this.state;

        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Homepage</Title>
                    </Body>
                </Header>
                <Content>
                    <Tabs>
                        <Tab heading="Tab 1">
                            <Container>
                                {/*<Header/>*/}
                                <Content padder>
                                    <Form>
                                        <Item floatingLabel>
                                            <Label>
                                                Username
                                            </Label>
                                            <Input/>
                                        </Item>
                                        <Item floatingLabel>
                                            <Label>
                                                Password
                                            </Label>
                                            <Input secureTextEntry={hidePassword}/>
                                        </Item>
                                        <ListItem>
                                            <Left>
                                                <Text>Hide password?</Text>
                                            </Left>
                                            <Right>
                                                <Radio selected={hidePassword} onPress={() => {this.setState({hidePassword: !hidePassword})}}/>
                                            </Right>
                                        </ListItem>
                                        <Container style={styles.loginButton}>
                                            
                                            <Content padder style={styles.button}>
                                            <Button>
                                                <Text>
                                                    Login
                                                </Text>
                                            </Button>
                                            </Content>
                                        </Container>
                                    </Form>
                                </Content>
                            </Container>
                        </Tab>
                        <Tab heading="Tab 2">
                        </Tab>
                        <Tab heading="Tab 3">
                        </Tab>
                    </Tabs>
                </Content>
            </Container>
        );
    }
}

export default Homepage;