import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function ListItem(props) {
	

  return (
  	<TouchableOpacity onPress = {() => props.navigation.navigate("Store", {loja: props.data})}>
  		<Text style = {styles.item}> {props.data.nome} </Text>
  	</TouchableOpacity>
  	
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});