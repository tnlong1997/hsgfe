import React from "react";
import { createRootNavigator } from "./src/components/routes/router";
import { isSignedIn } from "./auth";

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			signedIn: false,
			checkedSignIn: true,
		};
	}

	componentDidMount() {
		isSignedIn()
			.then(res => this.setState({ signedIn: res, checkedSignIn: true }));
	}

	render() {
		const { checkedSignIn, signedIn } = this.state;

		// If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
		if (!checkedSignIn) {
			return null;
		}

		const Layout = createRootNavigator(signedIn);
		return <Layout />;
	}
}
