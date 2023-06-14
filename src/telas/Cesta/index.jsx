import React from 'react'
import { View, StyleSheet } from 'react-native';
import Topo from './componentes/Topo'
import Descricao from './componentes/Descricao'


export default function Cesta({topo, detalhes }) {
  return (
    <>
        <Topo {...topo}/>
        <View style={styles.cesta}>
          <Descricao {...detalhes}/>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  cesta:{
      paddingVertical: 8,
      paddingHorizontal: 16
  },
})