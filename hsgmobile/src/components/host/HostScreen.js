
import {Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Badge, Icon } from 'native-base';

export default class HostScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Text>Host</Text>
        </Content>
      </Container>
    )
  }
}