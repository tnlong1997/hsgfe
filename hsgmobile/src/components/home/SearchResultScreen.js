import {Text, View, Image, FlatList} from 'react-native';
import React, {Component} from 'react';
import { Divider } from 'react-native-elements';
import styles from './Styles';

export default class SearchResultScreen extends Component {
	render() {
		return (
			<View>
				<FlatList
					data={[
						{
							key: '0', // Event ID
							name: 'MU vs Barca',
							location: 'Mỹ Đình',
							time: 'Jan 1, 2019, 06:00 pm',
							numOfPlayers: 24,
							sport: 'Soccer',
							imageSrc: 'https://images.performgroup.com/di/library/GOAL/46/5b/san-m-inh_1o340tov16b4712yw5e6t3qww7.jpg?t=531027583'
						},
						{
							key: '1',
							name: 'Basketball 101',
							location: '123 Main Street, LA',
							time: 'Apr 12, 2019, 08:47 pm',
							numOfPlayers: 12,
							sport: 'Basketball',
							imageSrc: 'https://www.aviatorsports.com/wp-content/uploads/2018/08/Field-House-5-resized.jpeg'
						},
						{
							key: '2',
							name: 'Baseball 102',
							location: '823 Milan Street, LA',
							time: 'May 12, 2019, 08:47 pm',
							numOfPlayers: 2,
							sport: 'Baseball',
							imageSrc: 'https://www.monroecollegemustangs.com/common/controls/image_handler.aspx?thumb_id=13&image_path=/images/2018/3/6/DickCaswellField.jpg'
						},
						{
							key: '3',
							name: 'Bla bla bla',
							location: 'Đéo biết',
							time: 'Jul 12, 2019, 08:47 pm',
							numOfPlayers: 0,
							sport: 'Badminton',
							imageSrc: null
						}
					]}
					renderItem={({item}) => 
						<View style={styles.listItemView}>
							<View style={styles.listItemInfo}>
								<Text style={styles.listItemTitle} numberOfLines={1}>{item.name}</Text>
								<Text style={styles.listItemText} numberOfLines={1}>
									<Text style={{fontWeight: 'bold'}}>Location:</Text> {item.location}
								</Text>
								<Text style={styles.listItemText} numberOfLines={1}>
									<Text style={{fontWeight: 'bold'}}>Time:</Text> {item.time}
								</Text>
								<Text style={styles.listItemText} numberOfLines={1}>
									<Text style={{fontWeight: 'bold'}}>Players:</Text> {item.numOfPlayers}
								</Text>
								<Text style={styles.listItemText} numberOfLines={1}>
									<Text style={{fontWeight: 'bold'}}>Sport:</Text> {item.sport}
								</Text>
							</View>
							<Image
								style={{ flex: 1}}
								source={[item.imageSrc != null ? 
									{uri: item.imageSrc} : {uri: 'https://static.thenounproject.com/png/250091-200.png'}
								]}
							/>
						</View>
					}
					ItemSeparatorComponent={() => (
						<View>
							<Divider style={{ 
								height: 2
							}} />
						</View>
					)}
				/>
			</View>
		);
	}
}