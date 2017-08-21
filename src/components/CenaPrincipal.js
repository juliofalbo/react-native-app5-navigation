import React, { Component } from 'react';
import { Text, View, StatusBar, Image, StyleSheet, TouchableOpacity } from 'react-native';

import BarraNavegacao from './BarraNavegacao';
import { StackNavigator } from 'react-navigation';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

const corDeFundo = '#CCC';

export default class CenaPrincipal extends Component {

    render() {
        const navigation = this.props.navigation;
        const { navigate } = navigation;

        return (
            <View>
                <StatusBar
                    backgroundColor={corDeFundo}
                />

                <BarraNavegacao navigation={navigation} corDeFundo={corDeFundo} />

                <View style={styles.logo}>
                    <Image source={logo} />
                </View>

                <View style={styles.menu}>

                    <View style={styles.menuGrupo}>
                        <TouchableOpacity onPress={() => navigate('Clientes')}>
                            <Image style={styles.imgMenu} source={menuCliente} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('Contatos')}>
                            <Image style={styles.imgMenu} source={menuContato} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuGrupo}>
                        <TouchableOpacity onPress={() => navigate('Empresas')}>
                            <Image style={styles.imgMenu} source={menuEmpresa} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('Servicos')}>
                            <Image style={styles.imgMenu} source={menuServico} />
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center'
    },
    menuGrupo: {
        flexDirection: 'row'
    },
    imgMenu: {
        margin: 15
    }
});