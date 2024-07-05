import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { widthPercentage, heightPercentage } from '@/constants/screenCons.js'

export default function WelcomeScreen() {
  return (
    <View style={designs.container}>
      <Image source={require('../../assets/images/welcome.png')} style={designs.bgImage} />
    </View>
  )
}

const designs = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    resizeMode: 'contain',
    width: widthPercentage(100),

  },
  container: {},
  container: {},
})