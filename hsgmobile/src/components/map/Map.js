import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
// import console = require('console');

export default class Map extends React.Component {
    constructor(props) {
        super(props)
        fetch('http://maps.google.com/maps/api/geocode/json?address=vietnam', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({}),
			}).then((response) => response.json())
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
    }
    render() {
        return (
            <View style={{
                width: '100%',
                height: '100%'
            }}>
                <Text>AAA</Text>
                <MapView
                    style={styles.map}

                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
    }
});