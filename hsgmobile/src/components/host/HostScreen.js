
import {Text, View} from 'react-native';
import React, {Component} from 'react';
import { Header } from 'react-native-elements';

export default class HostScreen extends Component {
	render() {
		return (
			<View>
				<Header />
				<Text>Host</Text>
			</View>
		);
	}
}