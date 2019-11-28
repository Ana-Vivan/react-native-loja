import React from "react";
import { View, Text } from "react-native";
import HeaderDetails from "../componentes/headerDetails";

class DetailsScreen extends React.Component {
  render() {
  	const loja = this.props.navigation.getParam("loja");
    return (
      <View style={{ flex: 1}}>
      <HeaderDetails usuario={loja}/>
      </View>
    );
  }
}

export default DetailsScreen;