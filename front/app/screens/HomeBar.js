import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import logo from "../../assets/images/pet2logo.png";

const HomeBar = () => {
  return (
    <View>
      <View>

          <Image source={logo}/>
      </View>
    </View>
  )
}

export default HomeBar

const styles = StyleSheet.create({})