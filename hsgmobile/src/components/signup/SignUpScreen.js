import React from "react";
import { View } from "react-native";
import { Card, Button, Badge, Input } from "react-native-elements";
import { onSignIn } from "../../../auth";

export default class SignUp extends React.Component {
	render() {
		return (
			<View style={{ paddingVertical: 20 }}>
				<Badge>Email</Badge>
				<Input placeholder="Email address..." />
				<Badge>Password</Badge>
				<Input secureTextEntry placeholder="Password..." />
				<Badge>Confirm Password</Badge>
				<Input secureTextEntry placeholder="Confirm Password..." />
				<Card>

					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor="#03A9F4"
						title="SIGN UP"
						onPress={() => {
							onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
						}}
					/>
					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor="transparent"
						textStyle={{ color: "#bcbec1" }}
						title="Sign In"
						onPress={() => this.props.navigation.navigate("SignIn")}
					/>
				</Card>
			</View>
		);
	}
}
