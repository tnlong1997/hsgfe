import React from "react";
import { Platform, StatusBar } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
import {Icon} from 'native-base';
import SignIn from "../components/SignInScreen/SignInScreen";
import SignUp from "../components/SignUpScreen/SignUpScreen";
import HomeScreen from "../components/home/HomeScreen";
import HostScreen from "../components/host/HostScreen";
import NotiScreen from "../components/noti/NotiScreen";
// import TestScreen from "../test/TestScreen";
import ProfileScreen from "../components/ProfileScreen/ProfileScreen";

const headerStyle = {
	marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator({
	SignUp: {
		screen: SignUp,
		navigationOptions: {
			title: "Sign Up",
			headerStyle
		}
	},
	SignIn: {
		screen: SignIn,
		navigationOptions: {
			title: "Sign In",
			headerStyle
		}
	}
});

export const SignedIn = createBottomTabNavigator(
	{
		// Test: TestScreen, // Test screen for UI developing, comment out when doing UI test.
		Home: HomeScreen,
		Host: HostScreen,
		Noti: NotiScreen,
		Profile: ProfileScreen,
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => {
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
				// } else if (routeName === 'Test') {
				// 	iconName = 'ios-settings';
				} else if (routeName === 'Profile') {
					iconName = 'ios-log-out';
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

export const createRootNavigator = (signedIn = false) => {
	let switchNavigator = createSwitchNavigator(
		{
			SignedIn: {
				screen: SignedIn
			},
			SignedOut: {
				screen: SignedOut
			}
		},
		{
			initialRouteName: signedIn ? "SignedIn" : "SignedOut"
		}
	);
	return createAppContainer(switchNavigator);
};
