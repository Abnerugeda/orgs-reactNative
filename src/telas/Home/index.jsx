import React from 'react'
import { Text, View, Button } from 'react-native'
import mock from '../../mocks/cesta';

export default function Home( { navigation }) {
  return (
    <View>
        <Text>Home</Text>
        <Button title="Sobre" onPress={()=> navigation.navigate('Cesta', {...mock})}/>
    </View>
)
}
