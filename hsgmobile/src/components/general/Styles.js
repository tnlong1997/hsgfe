import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	logo: {
		width: 200, 
		height: 100,
		marginTop: 15
    },
    
	title: {
		color: 'black', 
		fontSize: 30, 
		margin: 5, 
		fontWeight: 'bold'
	},

	going: {
		fontWeight: 'bold',
		fontSize: 25,
		margin: 5,
		flex: 2
	},
	info: {
		height: 40,
		flexDirection: 'row'
	},

	infoDetail: {
		fontSize: 18,
		marginTop: 7,
		color: "#ACABAD",
		fontWeight: 'bold'
	}
});