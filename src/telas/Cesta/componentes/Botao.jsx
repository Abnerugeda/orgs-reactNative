import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

export default function Botao({children}) {
  return (
    <TouchableOpacity style={styles.botao} onPress={() => {}}>
       {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
})