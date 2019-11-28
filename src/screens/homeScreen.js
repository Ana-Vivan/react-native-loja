import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import ListItem from "../componentes/listItem";

class HomeScreen extends React.Component {
  render() {
  	const lojas = [
	{
	  imagem: require("../../assets/maquiagem.jpg"),
	  nome: "Maybelline Maquiagens",
	  descricao: "Está procurando por maquiagem de qualidade com um preço acessível? Você está no lugar certo, na Maybelline você encontra produtos que você deseja e a qualidade que você merece! Temos base, pó, delineador, rímel, batom etc... Está esperando o que? Venha conhecer nossa linha de produtos e sinta a diferença!"
	},
	 {
      imagem: require("../../assets/boutique.png"),
      nome: "Luxurious Boutique - Fashions Designer",
      descricao: "Venha conhecer nossa boutique, com diversos estilos de roupas e com a melhor qualidade que você cliente merece! Trabalhos com as marcas Gucci, Chanel, Burberry, Prada, Armani, entre outras. Todas feitas pela designer de moda, conhecida no mundo inteiro, Luana Rios."
    },
    {
      imagem: require("../../assets/joias.png"),
      nome: "Jóia Chic - Semijoias Finas",
      descricao: "Queremos estar presentes na alegria da pessoa que você irá presentear ou quem sabe na sua. Trabalhamos com peças de alto padrão de sofisticação, para lhe ajudar a manter sua beleza única. Venha conferir!!."
    },
    {
      imagem: require("../../assets/carros.png"),
      nome: "All Motors - Settore Al",
      descricao: "Nossa empresa oferece excelência em atendimento, qualidade e comodidade, conquistando assim, a confiança de seus clientes. Especializada na comercialização de veículos importados com atuação no mercado automobilístico nacional, a empresa disponibiliza grandes marcas e mantém importantes parcerias com diversos grupos de revendedores por todo o país. Só falta você vir conferir!!."
    },
    {
      imagem: require("../../assets/gastronomia.jpg"),
      nome: "Elo Gastronomia",
      descricao: "Em um ambiente confortável e casual, onde você poderá encontrar, desde pequenas entradas para acompanhar um drink até um menu de 7 etapas, elaborados com os melhores ingredientes e as técnicas mais avançadas pelo nosso Chef. Para melhorar a sua experiência e harmonizar a sua refeição, nós o convidamos para conhecer nossa adega, composta por mais de 120 rótulos e com capacidade de mais de 1500 garrafas."
    }
  ];

    return (
      <View>
        <FlatList
        data = {lojas}
        renderItem = {({item})=>  <ListItem navigation={this.props.navigation} data={item}/>}
        keyExtractor = {item => item.nome}
        />
      </View>
    );
  }
}

export default HomeScreen;
