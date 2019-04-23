export default class HttpRequest {
	static post = (url, data) => {
		return fetch('https://hasagi-test.herokuapp.com' + url, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((response) => response.json())
			.catch((error) =>{ alert(error); });
	}
}