import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Icon } from 'react-native-elements';


export default class Map extends React.Component {
	constructor(props) {
		super(props);
		let location = this.props.navigation.getParam('location');
		this.mapView = null;
		this.state = {
			marker: {
				longitude: location.lng,
				latitude: location.lat
			}
		};
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
					initialRegion={{
						latitude: this.state.marker.latitude,
						longitude: this.state.marker.longitude,
						latitudeDelta: 0.008,
						longitudeDelta: 0.008,
					}}
					annotations={this.state.markers}
				>
					<Marker 
						coordinate={this.state.marker}
						title={this.state.marker.title}
						description={this.state.marker.description}
					/>
				</MapView>

				<View style={styles.icon}>
					<Icon 
						name='arrow-left'
						type='font-awesome'
						color='#000000'
						onPress={() => {
							this.props.navigation.pop();
						}}
					/>
				</View>
			</View>
		);
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
	},
	icon: {
		position: 'absolute',
		left: '5%',
		top: '5%'
	}
});