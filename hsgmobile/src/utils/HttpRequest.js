export default class HttpRequest {
	static post = (url, data) => {
		return new Promise((resolve) => {
			fetch('https://hasagi-test.herokuapp.com' + url, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			}).then((response) => response.json())
				.then((res) => resolve({
					success: true,
					body: res 
				})).catch((err) => resolve({
					success: false,
					body: err
				}));
		});
	}
}