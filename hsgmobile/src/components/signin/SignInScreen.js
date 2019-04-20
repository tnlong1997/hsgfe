import React from "react";
import { View } from "react-native";
import { Card, Button, Badge, Input } from "react-native-elements";
import  HttpRequest from '../../utils/HttpRequest';

export default class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}

	render() {
		return (
			<View style={{ paddingVertical: 20 }}>
				<Card>
					<Badge>Email</Badge>
					<Input 
						placeholder="Email address" 
						onChangeText={(email) => this.setState({email})}
						value={this.state.email}
					/>
					<Badge>Password</Badge>
					<Input 
						secureTextEntry 
						placeholder="Password" 
						onChangeText={(password) => this.setState({password})}
						value={this.state.password}
					/>

					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor="#03A9F4"
						title="SIGN IN"
						onPress={() => {
							HttpRequest.post('/users/login', this.state).then((res) => {
								if (res.status == 200) {
									this.props.navigation.navigate("SignedIn");
								}
							});
						}}
					/>
				</Card>
			</View>
		);
	}
}
