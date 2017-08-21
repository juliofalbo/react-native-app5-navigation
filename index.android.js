import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresas from './src/components/CenaEmpresas';
import CenaServicos from './src/components/CenaServicos';

export default class CenaHome extends Component {

  render() {

    const navigation = this.props.navigation;

    return (
      <View style={{ backgroundColor: 'white' }}>
        <CenaPrincipal navigation={navigation} />
      </View >
    );
  }
}

//Preparei 2 opções para escolha de transação, uma no modelo de slider e a outra renderizando pelo centro
//Slider: TransitionConfigurationSlider
//Centro: TransitionConfigurationCenter
//Basta escolher uma e seta na propriedade transitionConfig
let TransitionConfigurationCenter = () => {
  return {
    screenInterpolator: (sceneProps) => {

      const { position, scene } = sceneProps;
      const { index } = scene;

      const inputRange = [index - 1, index, index + 1];
      const opacity = position.interpolate({
        inputRange,
        outputRange: [0.1, 1, 1],
      });

      const scaleY = position.interpolate({
        inputRange,
        outputRange: ([0.1, 1, 1]),
      });

      return {
        opacity,
        transform: [
          { scaleY }
        ]
      };
    }
  }
};

let TransitionConfigurationSlider = () => {
  return {
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [layout.initWidth, 0, 0]
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
        outputRange: [0, 1, 1, 0.3, 0]
      });

      return { opacity, transform: [{ translateX }] }
    }
  }
};

const app5 = StackNavigator({
  Home: { screen: CenaHome },
  Clientes: { screen: CenaClientes },
  Contatos: { screen: CenaContatos },
  Empresas: { screen: CenaEmpresas },
  Servicos: { screen: CenaServicos }
}, {
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white'
    },
    transitionConfig: TransitionConfigurationSlider
  });

AppRegistry.registerComponent('app5', () => app5);