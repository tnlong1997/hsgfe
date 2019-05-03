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
		return password === passwordConfirm ? "" : "Passwords do not match";
	}

	static validName = (name) => {
		return name.length > 0 ? "" : "Name is required";
	}

	static validPhone = (phone) => {
		let reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
		if (phone.length > 0) {
			if (reg.test(phone) === false) {
				return "Invalid phone number format";
			}
			return "";
		}
	}
}
