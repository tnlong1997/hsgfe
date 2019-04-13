import React from 'react';
import { Icon } from 'native-base';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/components/home/HomeScreen';
import HostScreen from './src/components/host/HostScreen';
import NotiScreen from './src/components/noti/NotiScreen';

const NavStack = createBottomTabNavigator(
	{
		// Test: SearchResultScreen, // Test screen for UI developing, comment out when doing UI test.
		Home: HomeScreen,
		Host: HostScreen,
		Noti: NotiScreen
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => {
				// console.log(navigation.state)
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
					iconName = 'ios-notifications';
				} else if (routeName === 'Test') {
					iconName = 'ios-settings';
				}

				// You can return any component that you like here!
				return <Icon name={iconName} size={25} color={tintColor} />;
			},
		}),
		tabBarOptions: {
			activeTintColor: '#000000',
			inactiveTintColor: '#FFFFFC',
			activeBackgroundColor: '#FECC52',
			inactiveBackgroundColor: '#F49F0A'
		},
	}
);

export default createAppContainer(NavStack);