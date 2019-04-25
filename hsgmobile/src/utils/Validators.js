export default class Validator {
	static validEmail = (email) => {
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (reg.test(email) === false)
		{
			return "Invalid email format";
		}
		else {
			return "";
		}
	}

	static validPassword = (password) => {
		return password.length > 8 ? "" : "Password must be longer than 8 characters";
	}

	static validPasswordConfirm = (password, passwordConfirm) => {
		return password === passwordConfirm ? "" : "Passwords does not match";
	}
}
