import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Card, Button, Text, Input } from "react-native-elements";
import { onSignIn } from "../../utils/auth";
import styles from './Styles';
import HttpRequest from '../../utils/HttpRequest';
import Validator from "../../utils/Validators";

export default class SignUpScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fName: "",
			lName: "",
			phone: "",
			email: "",
			emailError: "",
			password: "",
			passwordError: "",
			passwordConfirm: "",
			passwordConfirmError: "",
			validationError: "",
			fnameError: "",
			lnameError: "",
			phoneError: "",
			loading: false
		};
	}

	render() {
		return (
			<View style={{ paddingVertical: 20 }}>
				<Card>
					{/* First Name */}
					<Input
						placeholder="First Name"
						onChangeText={(fName) => this.setState({fName})}/>
					<Text style={styles.errorText}>{this.state.fnameError}</Text>
					{/* Last Name */}
					<Input
						placeholder="Last Name"
						onChangeText={(lName) => this.setState({lName})}/>
					<Text style={styles.errorText}>{this.state.lnameError}</Text>
					{/* Phone Number */}
					<Input
						placeholder="Phone Number (Optional)"
						keyboardType="phone-pad"
						onChangeText={(phone) => this.setState({phone})}/>
					<Text style={styles.errorText}>{this.state.phoneError}</Text>
					{/* Email */}
					<Input
						placeholder="Email address"
						keyboardType="email-address"
						onChangeText={(email) => this.setState({email})}
						autoCapitalize = "none" />
					<Text style={styles.errorText}>{this.state.emailError}</Text>
					{/* Password */}
					<Input
						secureTextEntry
						placeholder="Password"
						onChangeText={(password) => this.setState({password})}
						value={this.state.password} />
					<Text style={styles.errorText}>{this.state.passwordError}</Text>
					{/* Confirm Password */}
					<Input
						secureTextEntry
						placeholder="Confirm Password"
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
						onPress={async () => {
							let emailError = Validator.validEmail(this.state.email);
							let passwordError = Validator.validPassword(this.state.password);
							let passwordConfirmError = Validator.validPasswordConfirm(this.state.password, this.state.passwordConfirm);
							let fnameError = Validator.validName(this.state.fName);
							let lnameError = Validator.validName(this.state.lName);
							let phoneError = Validator.validPhone(this.state.phone);
							this.setState({ validationError: "" });
							if (this.state.emailError != emailError
								|| this.state.passwordError != passwordError
								|| this.state.passwordConfirmError != passwordConfirmError
								|| this.state.fnameError != fnameError
								|| this.state.lnameError != lnameError
								|| this.state.phoneError != phoneError) {
								this.setState({
									emailError: emailError,
									passwordError: passwordError,
									passwordConfirmError: passwordConfirmError,
									fnameError: fnameError,
									lnameError: lnameError,
									phoneError: phoneError
								});
							}
							let info = {
								email: this.state.email,
								password: this.state.password
							};
							if (!emailError && !passwordError && !passwordConfirmError) {
								this.setState({loading: true});
								let signUpResponse = await HttpRequest.post('/users/signup', info);
								this.setState({loading: false});
								if (signUpResponse.success && signUpResponse.body.status == 200) {
									let signInResponse = await HttpRequest.post('/users/login', info);
									if (signInResponse.success && signInResponse.body.status == 200) {
										onSignIn(signInResponse.body.token).then(() => this.props.navigation.navigate("SignedIn"));
									} else {
										this.setState({validationError: signInResponse.body.err});
									}
								}
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
