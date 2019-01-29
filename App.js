import React from 'react';
import { StyleSheet, View } from 'react-native';
import getTheme from './native-base-theme/components';
import variables from "./native-base-theme/variables/commonColor";
import { StyleProvider, Container, Header, Radio, Text, Content, List, ListItem } from 'native-base';
import { Tab, Tabs, Form, Input, Item, Label, ScrollableTab, Title, Body, Button, CheckBox, Left, Right } from 'native-base';
import Homepage from './src/Homepage';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidePassword: true,
    }
  }
  render() {
    const { hidePassword } = this.state;
    return (
      <StyleProvider style={getTheme(variables)}>
        {/* <Container>
                <Header>
                    <Body>
                        <Title>Homepage</Title>
                    </Body>
                </Header>
                <Content>
                    <Tabs>
                        <Tab heading="Tab 1">
                            <Container>
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
                                                <CheckBox checked={hidePassword} onPress={() => {this.setState({hidePassword: !hidePassword})}}/>
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
            </Container> */}
            <Homepage />
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
