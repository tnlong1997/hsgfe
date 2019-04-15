/* global require */
import {Text, View, Image, FlatList, TouchableOpacity, Switch} from 'react-native';
import React, {Component} from 'react';
import { Divider, Header, Icon } from 'react-native-elements';
import styles from './Styles';

export default class EventDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
          going: false
        };
    }

	render() {
        let detail = this.props.navigation.getParam('eventDetail')
        console.log(detail)
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
				/>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'stretch'
                }}>
                    <View style={{height: 140, backgroundColor: 'powderblue'}}>
                        <Image 
                            source={{uri: detail.imageSrc}}
                            style={{width: '100%', height: '100%'}}
                        />
                    </View>
                    <View style={{height: 45}}>
                        <Text style={styles.title} numberOfLines={1}>{detail.name}</Text>
                    </View>
                    <Divider />
                    <View style={{
                        height: 40,
                        flexDirection: 'row'
                    }}>
                        <Text style={styles.going}>Going?</Text>
                        <View style={{
                            flex:0.3,
                            margin: 2
                        }}>
                            <Icon 
                                name="check"
                                type="evilicon"
                                size={40}
                                color={this.state.going ? 'green': '#000000'}
                                onPress={() => {
                                    this.setState({going: true})
                                }}
                            />
                        </View>
                        <View style={{
                            flex:0.3,
                            margin: 2
                        }}>
                            <Icon 
                                name="close-o"
                                type="evilicon"
                                size={40}
                                color={!this.state.going ? 'green': '#000000'}
                                onPress={() => {
                                    this.setState({going: false})
                                }}
                            />
                        </View>
                    </View>
                    <Divider />
                </View>
			</View>
		);
	}
}