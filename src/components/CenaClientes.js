import React, { Component } from 'react';
import { Text, View, StatusBar, Image, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';
import { StackNavigator } from 'react-navigation';

const imgDetalhe = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

const corDeFundo = '#B9C941';

export default class CenaClientes extends Component {

    render() {
        const navigation = this.props.navigation;

        return (
            <View>
                <StatusBar
                    backgroundColor={corDeFundo}
                />

                <BarraNavegacao navigation={navigation} voltar corDeFundo={corDeFundo} />

                <View style={styles.cabecalho}>
                    <Image source={imgDetalhe} />
                    <Text style={styles.txtTitulo}>Nossos Clientes</Text>
                </View>

                <View style={styles.clientes}>
                    <Image source={cliente1} />
                    <Text style={styles.txtCliente}>Depoimento Cliente 2</Text>
                </View>
                <View style={styles.clientes}>
                    <Image source={cliente2} />
                    <Text style={styles.txtCliente}>Depoimento Cliente 2</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        fontSize: 30,
        color: corDeFundo,
        marginLeft: 10,
        marginTop: 25
    },
    clientes: {
        padding: 20,
        marginTop: 10
    },
    txtCliente:
    {
        fontSize: 18,
        marginLeft: 20,
    }
});