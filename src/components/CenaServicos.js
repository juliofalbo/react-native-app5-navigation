import React, { Component } from 'react';
import { Text, View, StatusBar, Image, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';
import { StackNavigator } from 'react-navigation';

const imgDetalhe = require('../imgs/detalhe_servico.png');

const corDeFundo = '#19D1C8';

export default class CenaServicos extends Component {

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
                    <Text style={styles.txtTitulo}>Serviços</Text>
                </View>

                <View style={styles.servicos}>
                    <Text style={styles.txt}>- Criação de WebApps</Text>
                    <Text style={styles.txt}>- Criação de Aplicativos</Text>
                    <Text style={styles.txt}>- Criação de Identidade Visual</Text>
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
    servicos: {
        padding: 20,
        marginTop: 20
    },
    txt:
    {
        fontSize: 18
    }
});