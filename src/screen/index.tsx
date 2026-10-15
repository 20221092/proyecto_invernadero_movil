import { View, Text } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

const  index=() =>{
  return (
    <View>
      <Text>index</Text>
      <Text> sxjjxsji</Text>
      <Link href={"./index"}> lista productos </Link>
      <Link href={"./index"}></Link>
      <Boton titulo ='Abaut' onPress={()=>{router.navigate('./about.tsx')}}/>


    

    </View>
  )
}