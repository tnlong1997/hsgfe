
import {Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import { FooterTab, Button, Badge, Icon } from 'native-base';

export default class FooterLayout extends Component {
  constructor() {
    super()
    this.state = {
      buttonIndex: 0
    }
  }
  render() {
    return (
      <FooterTab >
        <Button active vertical 
          style={[
            this.state.buttonIndex == 0 ? 
            styles.buttonActivated : styles.buttonDeactivated
          ]}
          onPress={() => {
            this.setState({buttonIndex: 0});
          }}
        >
          <Icon name="md-home" />
          <Text>Home</Text>
        </Button>

        <Button active vertical
          style={[
            this.state.buttonIndex == 1 ? 
            styles.buttonActivated : styles.buttonDeactivated
          ]}
          onPress={() => {
            this.setState({buttonIndex: 1});
          }}
        >
          <Icon name="ios-basketball" />
          <Text>Host</Text>
        </Button>
        
        <Button active badge vertical
          style={[
            this.state.buttonIndex == 2 ? 
            styles.buttonActivated : styles.buttonDeactivated
          ]}
          onPress={() => {
            this.setState({buttonIndex: 2});
          }}
        >
          <Badge><Text>2</Text></Badge>
          <Icon name="ios-notifications" />
          <Text>Noti</Text>
        </Button>
        
        {/* <Button active vertical
          style={[
            this.state.buttonIndex == 3 ? 
            styles.buttonActivated : styles.buttonDeactivated
          ]}
          onPress={() => {
            this.setState({buttonIndex: 3});
          }}
        >
          <Icon name="person" />
          <Text>Profile</Text>
        </Button> */}
      </FooterTab>
    )
  }
}

const styles = StyleSheet.create({
  buttonActivated: {
    backgroundColor: '#FFD167'
  },
  buttonDeactivated: {
    backgroundColor: '#FEBB35'
  }
})