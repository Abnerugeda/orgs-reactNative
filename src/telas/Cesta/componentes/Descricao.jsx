import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Texto from '../../../componentes/Texto'
import Botao from './Botao'

export default function Descricao({nome, logoFazenda, nomeFazenda, descricao, preco, botao}) {
  return (
    <>
        <Texto style={styles.nome}>{nome}</Texto>
        <View style={styles.fazenda}>
            <Image style={styles.imagemFazenda} source={logoFazenda}/>
            <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={styles.descricao}>
            {descricao}
        </Texto>
        <Texto style={styles.preco}>{preco}</Texto>
        <Botao> 
            <Texto style={styles.textoBotao}>{botao}</Texto>
        </Botao>
    </>
  )
}

const styles = StyleSheet.create({
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
    },
    textoBotao: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    }

})

