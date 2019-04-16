import React from "react";
import { View } from "react-native";
import { Card, Button, Badge, Input } from "react-native-elements";
import { onSignIn } from "../../../auth";

export default class SignIn extends React.Component {
	render() {
		return (
			<View style={{ paddingVertical: 20 }}>
				<Card>
					<Badge>Email</Badge>
					<Input placeholder="Email address" />
					<Badge>Password</Badge>
					<Input secureTextEntry placeholder="Password" />

					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor="#03A9F4"
						title="SIGN IN"
						onPress={() => {
							onSignIn().then(() => this.props.snavigation.navigate("SignedIn"));
						}}
					/>
				</Card>
			</View>
		);
	}
}
