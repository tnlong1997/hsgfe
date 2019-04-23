import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Card, Button, Text, Input } from "react-native-elements";
import { onSignIn } from "../../../auth";
import styles from '../general/Styles';
import HttpRequest from '../../utils/HttpRequest';
import Validator from "../../utils/Validators";

export default class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			emailError: "",
			password: "",
			passwordError: "",
			passwordConfirm: "",
			passwordConfirmError: "",
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
						placeholder="Email address..."
						keyboardType="email-address"
						onChangeText={(email) => this.setState({email})}
						autoCapitalize = "none" />
					<Text style={styles.errorText}>{this.state.emailError}</Text>
					{/* Password */}
					<Input
						secureTextEntry
						placeholder="Password..."
						onChangeText={(password) => this.setState({password})}
						value={this.state.password} />
					<Text style={styles.errorText}>{this.state.passwordError}</Text>
					{/* Confirm Password */}
					<Input
						secureTextEntry
						placeholder="Confirm Password..."
						onChangeText={(passwordConfirm) => this.setState({passwordConfirm})}
						value={this.state.passwordConfirm} />
					<Text style={styles.errorText}>{this.state.passwordConfirmError}</Text>

					{/* Loading */}
					<View>
						{this.state.loading ? (<ActivityIndicator color="#F49F0A" />) : (<View />)}
					</View>

					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor="#03A9F4"
						title="SIGN UP"
						onPress={() => {
							let emailError = Validator.validEmail(this.state.email);
							let passwordError = Validator.validPassword(this.state.password);
							let passwordConfirmError = Validator.validPasswordConfirm(this.state.password, this.state.passwordConfirm);
							this.setState({validationError: ""});
							this.setState({emailError: emailError});
							this.setState({passwordError: passwordError});
							this.setState({passwordConfirmError: passwordConfirmError});
							if (!emailError && !passwordError && !passwordConfirmError) {
								this.setState({loading: true});
								HttpRequest.post('/users/signup', this.state).then((res) => {
									this.setState({loading: false});
									if (res.status == 200) {
										HttpRequest.post('/users/login', this.state).then((response) => {
											if (response.status == 200) {
												onSignIn(response.token).then(() => this.props.navigation.navigate("SignedIn"));
											} else {
												this.setState({validationError: response.err});
											}
										});
									} else {
										this.setState({validationError: res.err});
									}
								});
							}
						}}/>
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
