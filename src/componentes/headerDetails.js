import React from "react";
import { View, Text, Image } from "react-native";

const HeaderDetails = (props) => (
	<View style={{flex: 1}}>

		<View style={{flex: 1, flexDirection: 'row'}} >
			<View style={{flex: 1, backgroundColor:'blue'}} >
				<Image source = {props.usuario.imagem}/> 
			</View>
			<View style={{flex: 3, backgroundColor:'green'}} >
				<Text> {props.usuario.nome} </Text>
				<Text> Piratuba/SC </Text>
			</View>
		</View>




		<View style={{flex: 3}}>
			<Text> {props.usuario.descricao} 
			</Text>
		</View>

	</View>
);

export default HeaderDetails;