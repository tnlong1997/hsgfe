/* global require */
import React, {Component} from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import SearchForm from './SearchForm';
import { Font} from 'expo';

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
				<KeyboardAvoidingView behavior="padding" enabled>
					<SearchForm />
				</KeyboardAvoidingView>
			);
		}
	}
}