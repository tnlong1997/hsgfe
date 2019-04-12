
import {Text, View} from 'react-native';
import React, {Component} from 'react';
import { Header } from 'react-native-elements';

export default class NotiScreen extends Component {
	render() {
		return (
			<View>
				<Header />
				<Text>Notiost</Text>
			</View>
		);
	}
}