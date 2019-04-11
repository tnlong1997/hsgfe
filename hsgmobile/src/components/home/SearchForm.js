import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Input, Icon, ButtonGroup} from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Container, Header, Content, Left, Body, Right, Button, Title, Text } from 'native-base';

export default class SearchForm extends Component {

  constructor() {
    super();
    this.state = {
      startTimeVisible: false,
      endTimeVisible: false,
      selectedIndex: 0
    };
    this.startDate = null;
    this.endDate = null;
  }

  _showStartTimePicker = () => this.setState({ startTimeVisible: true });
 
  _hideStartTimePicker = () => this.setState({ startTimeVisible: false });

  _showEndTimePicker = () => this.setState({ endTimeVisible: true });
 
  _hideEndTimePicker = () => this.setState({ endTimeVisible: false });

  _handleStartDatePicked = (date) => {
    this.startDate = date;
    this._hideStartTimePicker();
  }

  _handleEndDatePicked = (date) => {
    this.endDate = date;
    this._hideEndTimePicker();
  }

  _updateIndex = (index) => {
    this.setState({selectedIndex: index})
  }
  
  render() {
    const distance = ['5 miles', '10 miles', '15 miles', '20 miles'];
    const { selectedIndex } = this.state
    return (
      <Container>
				<Header style={{backgroundColor: '#FEBB35'}}>
          <Left>
						<Button transparent>
              <Icon name='arrow-back' color='white' />
            </Button>
          </Left>
          <Body>
							<Image source={require('../../../assets/Hasagi.png')} style={
								{
									width: 200, 
									height: 150,
									marginTop: 15
								}} 
							backgroundColor='transparent'
							/>
          </Body>
          <Right>
            <Button hasText transparent>
              <Text>SEARCH</Text>
            </Button>
          </Right>
        </Header>

        <Content>
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
            onPress={this._updateIndex}
            selectedIndex={selectedIndex}
            buttons={distance}
            containerStyle={styles.buttonGroupContainer}
            containerBorderRadius= {0}
          />

          {/* Start time set up */}
          <DateTimePicker
            isVisible={this.state.startTimeVisible}
            onConfirm={this._handleStartDatePicked}
            onCancel={this._hideStartTimePicker}
            mode='datetime'
            datePickerModeAndroid='spinner'
            is24Hour = {false}
          />
          <Input
            placeholder='Start time1'
            leftIcon={
              <Icon
                name="calendar-minus-o"
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
            editable= {false}
            inputStyle={{ marginLeft: 10 }}
            onFocus={() => {
              this._showStartTimePicker();
            }}
            value={this.startDate != null ? 
              moment(this.startDate).format("MMM D, YYYY, hh:mm a") : ""}
          />

          {/* End time set up */}
          <DateTimePicker
            isVisible={this.state.endTimeVisible}
            onConfirm={this._handleEndDatePicked}
            onCancel={this._hideEndTimePicker}
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
                onPress={() => this.setState({endTimeVisible: true})}
              />
            }
            editable= {false}
            inputStyle={{ marginLeft: 10 }}
            onFocus={() => {
              this._showEndTimePicker();
            }}
            value={this.endDate != null ? 
              moment(this.endDate).format("MMM D, YYYY, hh:mm a") : ""}
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
                style={{ backgroundColor: 'transparent' }}
              />
            }
            keyboardType='numeric'
            inputStyle={{ marginLeft: 18 }}
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
                style={{ backgroundColor: 'transparent' }}
              />
            }
            keyboardType='numeric'
            inputStyle={{ marginLeft: 15 }}
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
                style={{ backgroundColor: 'transparent' }}
              />
            }
            keyboardType='numeric'
            inputStyle={{ marginLeft: 13 }}
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
                style={{ backgroundColor: 'transparent' }}
              />
            }
            keyboardType='numeric'
            inputStyle={{ marginLeft: 14 }}
          />
        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  buttonGroupContainer: {
    marginTop: 15,
    marginBottom: 20,
    height: 30,
    borderRadius: 15
  }
});
