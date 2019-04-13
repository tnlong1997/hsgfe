/* global require */
import React, {Component} from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Input, Icon, ButtonGroup, Header } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import styles from './Styles';
// import console = require('console');

export default class SearchForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			startTimeVisible: false,
			endTimeVisible: false,
			selectedIndex: 0
		};
		this.searchCriteria = {
			sports: null,
			location: null,
			distance: "5",
			startDate: null,
			endDate: null,
			minimumPrice: null,
			maximumPrice: null,
			numOfPlayers: null,
			eventId: null
		};
	}
  
	render() {
		const distance = ['5 miles', '10 miles', '15 miles', '20 miles'];

		return (
			<View>
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
					rightComponent={
						<TouchableOpacity
							onPress={() => {
								this.props.navigation.push('SearchResult', {
									searchCriteria: this.searchCriteria
								});
							}}
						>
							<Text style={styles.bold}>SEARCH</Text>
						</TouchableOpacity> 
					}
				/>

				<Input
					placeholder='Sports'
					leftIcon={
						<Icon
							name="soccer-ball-o"
							type="font-awesome"
							color="rgba(0, 0, 0, 0.38)"
							size={25}
							style={{ backgroundColor: 'transparent' }}
						/>
					}
					rightIcon={
						<Icon 
							name="chevron-right"
							type="font-awesome"
							color="rgba(0, 0, 0, 0.38)"
							size={25}
							style={{ backgroundColor: 'transparent'}}
						/>
					}
					inputStyle={{ marginLeft: 8 }}
				/>

				{/* Location */}
				<Input
					placeholder='Address, Zipcode, etc.'
					leftIcon={
						<Icon
							name="map-marker"
							type="font-awesome"
							color="rgba(0, 0, 0, 0.38)"
							size={25}
							style={{ backgroundColor: 'transparent' }}
						/>
					}
					rightIcon={
						<Icon 
							name="chevron-right"
							type="font-awesome"
							color="rgba(0, 0, 0, 0.38)"
							size={25}
							style={{ backgroundColor: 'transparent' }}
							onPress={() => this.setState({startTimeVisible: true})}
						/>
					}
					inputStyle={{ marginLeft: 20 }}
				/>
				<ButtonGroup
					buttonStyle = {styles.buttonGroup}
					onPress={(index) => {
						this.searchCriteria.distance=distance[index].split(' ')[0];
						this.setState({selectedIndex: index});
					}}
					selectedIndex={this.state.selectedIndex}
					buttons={distance}
					containerStyle={styles.buttonGroupContainer}
					containerBorderRadius= {0}
				/>

				{/* Start time set up */}
				<DateTimePicker
					isVisible={this.state.startTimeVisible}
					onConfirm={(date) => {
						this.searchCriteria.startDate = date;
						this.setState({ startTimeVisible: false });
					}}
					onCancel={() => {
						this.setState({ startTimeVisible: false });
					}}
					mode='datetime'
					datePickerModeAndroid='spinner'
					is24Hour = {false}
				/>
				<Input
					placeholder='Start time'
					leftIcon={
						<Icon
							name="calendar-minus-o"
							type="font-awesome"
							color="rgba(0, 0, 0, 0.38)"
							size={25}
							style={styles.inputIcon}
						/>
					}
					rightIcon={
						<Icon 
							name="chevron-right"
							type="font-awesome"
							color="rgba(0, 0, 0, 0.38)"
							size={25}
							style={styles.inputIcon}
							onPress={() => this.setState({startTimeVisible: true})}
						/>
					}
					editable= {false}
					inputStyle={{ marginLeft: 10 }}
					onFocus={() => {
						this.setState({ startTimeVisible: true });
					}}
					value={this.searchCriteria.startDate != null ? 
						moment(this.searchCriteria.startDate).format("MMM D, YYYY, hh:mm a") : ""}
				/>

				{/* End time set up */}
				<DateTimePicker
					isVisible={this.state.endTimeVisible}
					onConfirm={(date) => {
						// this.state.setState({endDate: date});
						this.searchCriteria.endDate = date;
						this.setState({ endTimeVisible: false });
					}}
					onCancel={() => {
						this.setState({ endTimeVisible: false });
					}}
					mode='datetime'
					datePickerModeAndroid='spinner'
					is24Hour = {false}
				/>
				<Input
					placeholder='End time'
					leftIcon={
						<Icon
							name="calendar-plus-o"
							type="font-awesome"
							color="rgba(0, 0, 0, 0.38)"
							size={25}
							style={styles.inputIcon}
						/>
					}
					rightIcon={
						<Icon 
							name="chevron-right"
							type="font-awesome"
							color="rgba(0, 0, 0, 0.38)"
							size={25}
							style={styles.inputIcon}
							onPress={() => this.setState({endTimeVisible: true})}
						/>
					}
					editable= {false}
					inputStyle={{ marginLeft: 10 }}
					onFocus={() => {
						this.setState({ endTimeVisible: true });
					}}
					value={this.searchCriteria.endDate != null ? 
						moment(this.searchCriteria.endDate).format("MMM D, YYYY, hh:mm a") : ""}
				/>

				{/* Minumum Price */}
				<Input
					placeholder="Minumum Price"
					leftIcon={
						<Icon
							name="price-tag"
							type="foundation"
							color="rgba(0, 0, 0, 0.38)"
							size={25}
							style={styles.inputIcon}
						/>
					}
					keyboardType='numeric'
					inputStyle={{ marginLeft: 18 }}
					onChangeText={(price) => {
						this.searchCriteria.minimumPrice=price;
					}}
				/>

				{/* Maximum Price */}
				<Input 
					placeholder="Maximum Price"
					leftIcon={
						<Icon
							name="pricetag-multiple"
							type="foundation"
							color="rgba(0, 0, 0, 0.38)"
							size={25}
							style={styles.inputIcon}
						/>
					}
					keyboardType='numeric'
					inputStyle={{ marginLeft: 15 }}
					onChangeText={(price) => {
						this.searchCriteria.maximumPrice=price;
					}}
				/>

				{/* Number of Players */}
				<Input 
					placeholder="Number of Players"
					leftIcon={
						<Icon
							name="users"
							type="font-awesome"
							color="rgba(0, 0, 0, 0.38)"
							size={20}
							style={styles.inputIcon}
						/>
					}
					keyboardType='numeric'
					inputStyle={{ marginLeft: 13 }}
					onChangeText={(players) => {
						this.searchCriteria.numOfPlayers=players;
					}}
				/>

				{/* Event ID */}
				<Input 
					placeholder="Event ID"
					leftIcon={
						<Icon
							name="hashtag"
							type="font-awesome"
							color="rgba(0, 0, 0, 0.38)"
							size={20}
							style={styles.inputIcon}
						/>
					}
					keyboardType='numeric'
					inputStyle={{ marginLeft: 14 }}
					onChangeText={(eventId) => {
						this.searchCriteria.eventId=eventId;
					}}
				/>
			</View>
		);
	}
}
