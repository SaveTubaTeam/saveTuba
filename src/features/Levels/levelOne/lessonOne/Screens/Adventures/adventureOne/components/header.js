import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
	
	render() {
		return (
			<View style={styles.header}>
				<Text style={styles.header_text}>Memory Challenge</Text>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	header: {
		flex: 1,
		flexDirection: 'column',
		alignSelf: 'stretch',
		paddingTop: 40,
		paddingBottom: 5,
		backgroundColor: '#C6DC3B'
	},
	header_text: {
		fontWeight: 'bold',
		fontSize: 25,
		textAlign: 'center',
		color: 'white'
	}
});