/* global require */
import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import { Divider, Header, Icon } from 'react-native-elements';
import styles from './Styles';
import MapRequest from '../../utils/MapRequest';

export default class EventDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			going: false
		};
	}

	render() {
		let detail = this.props.navigation.getParam('eventDetail');
		return (
			<View>
				{/* Header */}
				<Header
					backgroundColor= '#F49F0A'
					leftComponent={
						<Icon
							name='arrow-left'
							type='font-awesome'
							color='#000000'
							onPress={() => {
								this.props.navigation.pop();
							}}
						/>
					}
					centerComponent={
						<Image 
							source={require('../../../assets/Hasagi.png')} 
							style={styles.logo} 
							backgroundColor='transparent'
						/> 
					}
				/>

				{/* Event Display */}
				<View style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'stretch',
					margin: 1
				}}>

					{/* Cover Image */}
					<View style={{height: 140, backgroundColor: 'powderblue'}}>
						<Image 
							source={{uri: detail.imageSrc}}
							style={{width: '100%', height: '100%'}}
						/>
					</View>

					{/* Event Name */}
					<View style={{height: 50}}>
						<Text style={styles.title} numberOfLines={1}>{detail.name}</Text>
					</View>
					<Divider />

					{/* Going? */}
					<View style={{
						height: 45,
						flexDirection: 'row'
					}}>
						<Text style={styles.going}>Going?</Text>

						{/* Check */}
						<View style={{
							flex: 0.3,
							margin: 2
						}}>
							<Icon 
								name="check"
								type="evilicon"
								size={45}
								color={this.state.going ? 'green': '#000000'}
								onPress={() => {
									this.setState({going: true});
								}}
							/>
						</View>

						{/* Cross */}
						<View style={{
							flex: 0.3,
							margin: 2
						}}>
							<Icon 
								name="close-o"
								type="evilicon"
								size={45}
								color={!this.state.going ? 'green': '#000000'}
								onPress={() => {
									this.setState({going: false});
								}}
							/>
						</View>
					</View>
					<Divider />

					{/* Location */}
					<View style={styles.info}>
						<View style={{flex: 1, marginTop: 6}}>
							<Icon 
								name="location"
								type="evilicon"
								size={35}
							/>
						</View>
						<View style={{flex: 6, alignItems: 'flex-start'}}>
							<Text style={styles.infoDetail} numberOfLines={1}>{detail.location}</Text>
						</View>
						<View style={{flex: 1, marginTop: 6}}>
							<Icon 
								name="chevron-right"
								type="evilicon"
								size={35}
								onPress={() => {
									MapRequest.getByAddress(detail.location).then(response => {
										let geo = response.body.results[0].geometry.location;
										this.props.navigation.push('Map', {
											location: {
												lat: geo.lat,
												lng: geo.lng
											}
										});
									});
								}}
							/>
						</View>
					</View>
					<Divider />

					{/* Time */}
					<View style={styles.info}>
						<View style={{flex: 1, marginTop: 6}}>
							<Icon 
								name="clock"
								type="evilicon"
								size={35}
							/>
						</View>
						<View style={{flex: 6, alignItems: 'flex-start'}}>
							<Text style={styles.infoDetail} numberOfLines={1}>{detail.time}</Text>
						</View>
					</View>
					<Divider />

					{/* Host */}
					<View style={styles.info}>
						<View style={{flex: 1, marginTop: 6}}>
							<Icon 
								name="user"
								type="evilicon"
								size={35}
							/>
						</View>
						<View style={{flex: 6, alignItems: 'flex-start'}}>
							<Text style={styles.infoDetail} numberOfLines={1}>{detail.hostName}</Text>
						</View>
					</View>
					<Divider />
				</View>
			</View>
		);
	}
}