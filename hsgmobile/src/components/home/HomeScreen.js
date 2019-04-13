/* global require */
import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import SearchForm from './SearchForm';
import { Font} from 'expo';
import styles from './Styles';
import {Header} from 'react-native-elements';

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
			return (
				<View style={styles.container}>
					<Header
						backgroundColor= '#F49F0A'
						leftComponent={{ icon: 'arrow-back', color: '#000000' }}
						centerComponent={
							<Image 
								source={require('../../../assets/Hasagi.png')} 
								style={{
									width: 200, 
									height: 100,
									marginTop: 15
								}} 
								backgroundColor='transparent'
							/> 
						}
						rightComponent={{ icon: 'search', color: '#000000' }}
					/>
					<SearchForm />
				</View>
			);
		}
	}
}