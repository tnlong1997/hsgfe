

export default class MapRequest {
	static getByAddress = (address) => {
		return new Promise((resolve) => {
			fetch('https://maps.google.com/maps/api/geocode/json?address=' + address + "&key=" + global.mapKey, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({}),
			}).then((response) => response.json())
			.then((res) => resolve({
				success: true,
				body: res 
			}))
			.catch((err) => resolve({
				success: false,
				body: err
			}));
		});
	}
	// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452
	static getByGeo = (lat, lng) => {
		return new Promise((resolve) => {
			fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ", " + lng + "&key=" + global.mapKey, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({}),
			}).then((response) => response.json())
			.then((res) => resolve({
				success: true,
				body: res 
			}))
			.catch((err) => resolve({
				success: false,
				body: err
			}));
		});
	}
}