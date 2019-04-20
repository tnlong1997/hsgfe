export default class HttpRequest {
	static post = (url, data) => {
		return fetch('http://10.0.2.2:3000' + url, {
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