import React, { Component } from 'react';
import { Text, View, StatusBar, Image, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';
import { StackNavigator } from 'react-navigation';

const imgDetalhe = require('../imgs/detalhe_empresa.png');

const corDeFundo = '#EC7148';

export default class CenaEmpresas extends Component {

    render() {
        const navigation = this.props.navigation;

        return (
            <View>
                <StatusBar
                    backgroundColor={corDeFundo}
                />

                <BarraNavegacao navigation={navigation} voltar corDeFundo={'#EC7148'} />

                <View style={styles.cabecalho}>
                    <Image source={imgDetalhe} />
                    <Text style={styles.txtTitulo}>Empresas</Text>
                </View>

                <View style={styles.empresas}>
                    <Text style={styles.txt}>Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.</Text>
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
    empresas: {
        padding: 20,
        marginTop: 20
    },
    txt:
    {
        fontSize: 18
    }
});