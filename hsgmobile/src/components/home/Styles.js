import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	buttonGroupContainer: {
		marginTop: 15,
		marginBottom: 20,
		height: 40,
		borderRadius: 25
	},
	
	container: {
		paddingTop: 22
	},

	inputIcon: {
		backgroundColor: 'transparent'
	},

	logo: {
		width: 200, 
		height: 100,
		marginTop: 15
	},

	listItemInfo: {
		flex: 3, 
		// backgroundColor: '#BEB7A4', 
		alignSelf: 'flex-end', 
		height: '100%',
		paddingLeft: 5
	},

	listItemText: { 
		color: 'black', 
		fontSize: 14, 
		margin: 1 
	},

	listItemView: {
		width: null, 
		height: 125, 
		flexDirection: 'row', 
		margin: 2,
		backgroundColor: '#BEB7A4'
	},

	listItemTitle: {
		color: 'black', 
		fontSize: 20, 
		margin: 1, 
		fontWeight: 'bold'
	},

	bold: {
		fontWeight: 'bold'
	}
});