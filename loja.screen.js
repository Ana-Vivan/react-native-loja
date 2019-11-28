import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, Image } from 'react-native';

export default function Loja(props) {
	return (
		<View style={{ flex: 1, padding: 20 }}>
				<Image 
					style={{flex: 1, width: undefined, height: undefined } 
					source={props.loja.imagem} 
					resideMode="contain"	
					/>
			</View>
			<View style={{flex: 1, flexDirection: "row"}}>
				<View style={{ flex: 1 }}>
					<Text>{props.loja.nome}</Text>
				</View>
				<View style={{ flex: 1 }}>
					<Button
						title="Seguir"
						onPress={() => Alert.alert("Simple Button pressed")}
				/>
				</View>
			</View>
				<Text>{props.loja.descricao}</Text>
				<View style={{ flex:2 }}></View>
			</View>
	);
}
