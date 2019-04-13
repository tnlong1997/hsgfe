/* global require */
import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import SearchForm from './SearchForm';
import { Font} from 'expo';
import styles from './Styles';
import {Header, Icon} from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchResultScreen from './SearchResultScreen';


const RootStack = createStackNavigator(
	{
		Search: SearchForm,
		SearchResult: SearchResultScreen,
	},
	{
		initialRouteName: 'Search',
		headerMode: 'float',
		defaultNavigationOptions: {
			header: (props) => {
				return (
					<Header
						backgroundColor= '#F49F0A'
						leftComponent={
							<Icon
								name='arrow-left'
								type='font-awesome'
								color='#000000'
								onPress={() => {
									props.navigation.goBack(null);
								}}
							/>
						}
						centerComponent={
							<Image 
								source={require('../../../assets/Hasagi.png')} 
								style={styles.logo} 
								backgroundColor='transparent'
							/> 
						}
						rightComponent={
							<Icon
								name='search'
								type='font-awesome'
								color='#000000'
								onPress={() => {
									props.navigation.push('SearchResult');
								}}
							/>
						}
					/>
				);
			}
		}
	}
);
  
const AppContainer = createAppContainer(RootStack);

export default class HostScreen extends Component {
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
					<Text>Loading...</Text>
				</View>
			);
		} else {
			// a = this.props.navigation;
			// a.navigate('SearchResult');
			// console.log("\n\n\n")
			return <AppContainer />;
		}
	}
}