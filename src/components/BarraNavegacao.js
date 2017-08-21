import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const btnVoltar = require('../imgs/btn_voltar.png');

export default class BarraNavegacao extends Component {
    render() {

        const navigation = this.props.navigation;
        const voltar = this.props.voltar;
        const corDeFundo = this.props.corDeFundo;

        if (voltar === true) {
            return (
                <View style={[styles.header, { backgroundColor: corDeFundo }]}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={btnVoltar} />
                    </TouchableOpacity>
                    <Text style={styles.titulo}>ATM Consultoria</Text>
                </View >
            );
        }
        else {
            return (
                <View style={styles.header}>
                    <Text style={styles.titulo}>ATM Consultoria</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#CCC',
        padding: 10,
        height: 60,
        flexDirection: 'row'
    },
    titulo: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        color: '#000'
    }
});