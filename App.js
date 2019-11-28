import React from 'react';

import HomeScreen from "./src/screens/homeScreen";
import DetailsScreen from "./src/screens/detailsScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export default function App() {
	
   // Configuração de rotas
  const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Store: DetailsScreen
  },
  {
  	initialRouteName: "Home"
  });

  const AppContainer = createAppContainer(AppNavigator);

  return <AppContainer />;
}


//import React from 'react';
//import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

//  export default function App() {
	// return (
		//<View style={{ flex: 1 }}>
		//	<View style={imgLoja.container}>
		//		<Image resizeMode="contain" style={img.stretch} source={require("./assets/maquiagem.jpg")} />
		//	</View>
		//	<View style={cento.container}>
		//		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
		//			<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Maybelline</Text>
		//			<Text style={{ fontSize: 10 }}>Vendemos maquiagem</Text>
		//		</View>
		//		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Button title="Comprar" onPress={() => Alert.alert("Obrigado pela compra!")} /></View>
		//	</View>
		//	<View style={sobre.container}>
		//		<View style={{ flex:1 }}></View>
		//		<Text style={{ flex:10, justifyContent: 'center'}}>
		//			Está procurando por maquiagem de qualidade com um preço acessível? Você está no lugar certo, na Maybelline
		//		    você encontra produtos que você deseja e a qualidade que você merece! Temos base, pó, delineador, rímel, batom etc...
		//			Está esperando o que? Venha conhecer nossa linha de produtos e sinta a diferença!
		//		</Text>
		//		<View style={{ flex:1 }}></View>
		//	</View>
		//</View>
	//);
//}

//const img = StyleSheet.create({
	//stretch: {
	//	width: 470,
	//	height: 470,
	//	flex: 1
	//}
//});
//const imgLoja = StyleSheet.create({
	//container: {
	//	flex: 2,
	//	backgroundColor: '#fff',
	//	alignItems: 'center',
	//	justifyContent: 'center',
	//},
//});
//const cento = StyleSheet.create({
//	container: {
//		flex: 1,
//		flexDirection: "row",
//		backgroundColor: 'pink',
//		alignItems: 'center',
//		justifyContent: 'center',
//	},
//});
//const sobre = StyleSheet.create({
//	container: {
//		flex: 2,
//		flexDirection: 'row',
//		backgroundColor: 'pink',
//	},
//});