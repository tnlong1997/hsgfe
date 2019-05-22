import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapRequest from '../../utils/MapRequest';
import { TextInput } from 'react-native-gesture-handler';


export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            marker: {
                latitude: 10.795226,
                longitude: 106.708288,
                title: 'Foo Place',
                description: '1234 Foo Drive'
            }
        };
        this.mapView = null;
    }

    animate(r){
        this.mapView.animateToRegion(r, 2000);
    }

    render() {
        return (
            <View style={{
                width: '100%',
                height: '100%'
            }}>
                <MapView
                    ref={(ref)=>this.mapView=ref}
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
                    annotations={this.state.markers}
                >
                    <Marker 
                        coordinate={{
                            latitude: this.state.marker.latitude,
                            longitude: this.state.marker.longitude
                        }}
                        title={this.state.marker.title}
                        description={this.state.marker.description}
                    />
                </MapView>
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
                        let response = await MapRequest.getByAddress(this.state.location);
                        let location = response.body.results[0].geometry.location;
                        let newRegion = {
                            latitude: location.lat,
                            longitude: location.lng,
                            latitudeDelta: 0.014,
                            longitudeDelta: 0.014
                        }
                        this.animate(newRegion);
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