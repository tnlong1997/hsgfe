import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapRequest from '../../utils/MapRequest';
import { TextInput } from 'react-native-gesture-handler';
// import console = require('console');

export default class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: null
        }
        // fetch('https://maps.google.com/maps/api/geocode/json?address=125/41 Nguyen Cuu Van&key=AIzaSyATS3PfMqDDM-UwBVvxGHhqwj70BU2U4dY', {
		// 		method: 'POST',
		// 		headers: {
		// 			Accept: 'application/json',
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify({}),
		// 	}).then((response) => response.json())
		// 	.then((res) => console.log(res))
        //     .catch((err) => console.log(err));
        // Geocode.fromAddress("Ho Chi Minh").then(
        //     response => {
        //         const address = response.results[0].formatted_address;
        //         console.log(address);
        //     }
        // )
    }

    // _mapView: MapView;

    render() {
        return (
            <View style={{
                width: '100%',
                height: '100%'
            }}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    showsUserLocation={true}
                    onPanDrag={async (res) => {
                        let coordinate = res.nativeEvent.coordinate
                        let address = await MapRequest.getByGeo(coordinate.latitude, coordinate.longitude);
                        this.setState({location: address.body.results[0].formatted_address})
                    }}
                    initialRegion={{
                        latitude: 10.795226,
                        longitude: 106.708288,
                        latitudeDelta: 0.008,
                        longitudeDelta: 0.008,
                    }}
                />
                <TextInput 
                    style={{
                        height: 40, 
                        backgroundColor: 'rgba(255, 255, 255, 0.6)', 
                        borderWidth: 1, 
                        margin: 10,
                        padding: 5
                    }}
                    numberOfLines={1}
                    onChangeText={(address) => this.setState({location: address})}
                />
                <Button title="Search" 
                    onPress={async () => {
                        console.log("AAA")
                        console.log(this.state.location)
                        let response = await MapRequest.getByAddress(this.state.location)
                        // _mapView.animateToCoordinate({
                        //     latitude: LATITUDE,
                        //     longitude: LONGITUDE
                        // }, 1000)
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map: {
    //   ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});