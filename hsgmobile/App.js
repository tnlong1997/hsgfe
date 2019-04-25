/* global require */
import React from "react";
import { createRootNavigator } from "./src/utils/router";
import { isSignedIn } from "./src/utils/auth";
import { ActivityIndicator, View, Image } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signedIn: false,
			checkedSignIn: true,
			loading: true
		};
	}

	componentDidMount() {
		isSignedIn()
			.then(res => this.setState({ signedIn: res, checkedSignIn: true }));
	}

	async UNSAFE_componentWillMount() {
		await Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
		});
		this.setState({ loading: false });
	}

	render() {
		const { checkedSignIn, signedIn, loading } = this.state;

		if (loading) {
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
						<ActivityIndicator size="large" color="#F49F0A" />
					</View>
				</View>
			);
		}

		// If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
		else if (!checkedSignIn) {
			return null;
		}

		else {
			const Layout = createRootNavigator(signedIn);
			return <Layout />;
		}
	}
}
