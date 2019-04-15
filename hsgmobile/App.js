import React, {Component} from 'react';
import { Image, ActivityIndicator } from 'react-native'
import { Icon, View, Text } from 'native-base';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Font} from 'expo';
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

const FirstScreen = createAppContainer(NavStack)

export default class StartScreen extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
	}
		
	async UNSAFE_componentWillMount() {
		await Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
		});
		this.setState({ loading: false });
	}
	render() {
		if (this.state.loading) {
			return (
				<View>
					<Image 
						source={require('./assets/Hasagi.png')} 
						style={{width: '100%', height: '100%'}}
						backgroundColor='tranparent'
					/> 
					<View style ={{
						position: 'absolute',
						left: 0,
						right: 0,
						bottom: 50,
						alignItems: 'center',
    					justifyContent: 'center'
					}}>
						<ActivityIndicator size={80} color="#F49F0A" />
					</View>
				</View>
			);
		} else {
			return <FirstScreen />;
		}
	}
}