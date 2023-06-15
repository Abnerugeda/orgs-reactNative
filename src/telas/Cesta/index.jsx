import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';
import Topo from './componentes/Topo'
import Descricao from './componentes/Descricao'
import Itens from './componentes/Itens';


export default function Cesta({topo, detalhes, itens }) {
  return (
    <ScrollView>
        <Topo {...topo}/>
        <View style={styles.cesta}>
          <Descricao {...detalhes}/>
          <Itens {...itens}/>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cesta:{
      paddingVertical: 8,
      paddingHorizontal: 16
  },
})