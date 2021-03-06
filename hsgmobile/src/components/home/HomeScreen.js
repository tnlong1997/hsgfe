/* global require */
import React, {Component} from 'react';
import { Image } from 'react-native';
import SearchForm from './SearchForm';
import styles from './Styles';
import {Header, Icon, Avatar} from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchResultScreen from './SearchResultScreen';
import EventDetail from '../event/EventDetail';

export class FeedScreen extends Component {
	render() {
		return (
			<Header
				backgroundColor= '#F49F0A'
				leftComponent={
					<Avatar
						rounded
						source={{
							uri:
							'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
						}}
						title="MD"
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
							this.props.navigation.push('Search');
						}}
					/>
				}
			/>
		);
	}
}


const RootStack = createStackNavigator(
	{
		Feed: FeedScreen,
		Search: SearchForm,
		SearchResult: SearchResultScreen,
		Event: EventDetail
	},
	{
		initialRouteName: 'Feed',
		headerMode: 'none'
	}
);

const AppContainer = createAppContainer(RootStack);

export default class HomeScreen extends Component {
	render() {
		return <AppContainer />;
	}
}
