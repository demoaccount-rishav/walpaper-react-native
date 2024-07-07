import { Image, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { widthPercentage, heightPercentage } from '@/constants/screenCons.js';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import themes from '@/constants/themes'
import { router, Redirect } from 'expo-router';

export default function WelcomeScreen() {
  return <Redirect href="/home" />;

  return (
    <View style={[designs.container,]}>
      <Image resizeMode='cover' source={require('../../assets/images/welcome.png')} style={designs.bgImage} />

      <Animated.View entering={FadeInDown.duration(500)} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            'rgba(255,255,255,0)',
            'rgba(255,255,255,0.5)',
            'white',
            'white',
          ]}
          style={designs.gradient} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 0.8 }}
        />

        <View style={designs.contentContainer}>

          <Animated.Text entering={FadeInDown.delay(600)} style={designs.title}>
            Walpy
          </Animated.Text >

          <Animated.Text entering={FadeInDown.delay(700)} style={designs.punchLine}>
            Every Image Tells A Story
          </Animated.Text>

          <View  >

            <Pressable onPress={() => router.push('/home')} style={designs.startButton}>

              <Animated.Text entering={FadeInDown.delay(850)} style={designs.startText} >Explore More
              </Animated.Text>

            </Pressable >

          </View>

        </View>
      </Animated.View>

    </View>
  )
}

const designs = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: widthPercentage(100),
    height: heightPercentage(100),
    position: 'absolute',

  },
  gradient: {
    width: widthPercentage(100),
    height: heightPercentage(65),
    position: 'absolute',
    bottom: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 14,
  },
  title: {
    fontSize: heightPercentage(7),
    color: themes.colors.neutral(0.9),
    fontWeight: themes.fontWeights.bold,
    letterSpacing: 5,
  },
  punchLine: {
    fontSize: heightPercentage(2),
    letterSpacing: 2.5,
    marginBottom: 10,
    fontWeight: themes.fontWeights.medium
  },
  startButton: {
    marginBottom: 50,
    backgroundColor: themes.colors.neutral(0.9),
    padding: 15,
    paddingHorizontal: 80,
    borderRadius: themes.radius.xl,
    // width: widthPercentage(60)
  },
  startText: {
    color: themes.colors.white,
    fontSize: heightPercentage(3),
    fontWeight: themes.fontWeights.medium,
    letterSpacing: 1,
  }

})