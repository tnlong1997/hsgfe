import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Card, Button, Input, Text } from "react-native-elements";
import  HttpRequest from '../../utils/HttpRequest';
import { onSignIn } from "../../../auth";
import Validator from "../../utils/Validators";
import styles from '../general/Styles';

export default class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			emailError: "",
			password: "",
			passwordError: "",
			validationError: "",
			loading: false
		};
	}

	render() {
		return (
			<View style={{ paddingVertical: 20 }}>
				<Card>

					{/* Email */}
					<Input
						placeholder="Email address"
						keyboardType="email-address"
						onChangeText={(email) => this.setState({email})}
						autoCapitalize = "none"
						value={this.state.email}
					/>
					<Text style={styles.errorText}>{this.state.emailError}</Text>

					{/* Password */}
					<Input
						secureTextEntry
						placeholder="Password"
						onChangeText={(password) => this.setState({password})}
						value={this.state.password}
					/>
					<Text style={styles.errorText}>{this.state.passwordError}</Text>

					{/* Loading */}
					<View>
						{this.state.loading ? (<ActivityIndicator size="large" color="#F49F0A" />) : (<View />)}
					</View>

					{/* Validation */}
					<Text style={styles.errorText}>{this.state.validationError}</Text>

					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor="#03A9F4"
						title="SIGN IN"
						onPress={() => {
							let emailError = Validator.validEmail(this.state.email);
							let passwordError = Validator.validPassword(this.state.password);
							let info = {
								email: this.state.email,
								password: this.state.password
							}
							this.setState({validationError: ""});
							this.setState({emailError: emailError});
							this.setState({passwordError: passwordError});
							if (!emailError && !passwordError) {
								this.setState({loading: true});
								HttpRequest.post('/users/login', info).then((res) => {
									this.setState({loading: false});
									if (res.status == 200) {
										onSignIn(res.token).then(() => this.props.navigation.navigate("SignedIn"));
									} else {
										this.setState({validationError: res.err});
									}
								});
							}
						}}
					/>
				</Card>
			</View>
		);
	}
}
