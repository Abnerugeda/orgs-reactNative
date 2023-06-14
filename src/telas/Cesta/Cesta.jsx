import React from 'react'
import { View, Image, StyleSheet,} from 'react-native'

import Texto from '../../componentes/Texto'
import logo from '../../../assets/logo.png'
import Topo from './componentes/Topo'


export default function Cesta() {
  return (
    <>
        <Topo/>
        <View style={styles.cesta}>
            <Texto style={styles.nome}>Cesta de Verduras</Texto>
            <View style={styles.fazenda}>
                <Image style={styles.imagemFazenda} source={logo}/>
                <Texto style={styles.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={styles.descricao}>
                Uma cesta com produtos selecionados
                cuidadosamente da fazenda direto para
                sua cozinha
            </Texto>
            <Texto style={styles.preco}>R$ 40.00</Texto>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "MontserratBold",
        fontWeight: 'bold'
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular"

    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }

})

