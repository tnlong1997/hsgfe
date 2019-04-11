import React, {Component} from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome'; 
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
// import { Icon } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import SearchForm from './src/components/home/SearchForm';
import { Container, Header, Content, Footer, FooterTab, Button, Badge, Icon } from 'native-base';
import { ThemeProvider } from 'react-native-elements';
import FooterLayout from './src/components/FooterLayout';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/components/home/HomeScreen';
import HostScreen from './src/components/host/HostScreen';
import NotiScreen from './src/components/noti/NotiScreen';

const NavStack = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Host: HostScreen,
    Noti: NotiScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `md-home`;

          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'Host') {
          iconName = `ios-basketball`;
        } else if (routeName === 'Noti') {
          iconName = 'ios-notifications'
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      activeBackgroundColor: '#FFD167',
      inactiveBackgroundColor: '#FEBB35'
    },
  }
)

export default createAppContainer(NavStack)