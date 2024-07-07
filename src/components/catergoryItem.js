import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentage } from '@/constants/screenCons'
import themes from '@/constants/themes'
import Animated, { FadeInRight } from 'react-native-reanimated';

export default function CategoryItemComponent({ title, index, isActive, handleChangeCategory }) {

    let color = isActive ? themes.colors.white : themes.colors.neutral(0.8);
    let backgroundColor = isActive ? themes.colors.neutral(0.8) : themes.colors.white;

    return (
        <Animated.View
            entering={FadeInRight.delay(index * 250)}
        >
            <Pressable

                onPress={() => {
                    console.log(index);
                    handleChangeCategory(isActive ? null : title)
                }}

                style={[designs.category, { backgroundColor }]}
            >
                <Text style={[designs.title, { color }]}>{title}</Text>
            </Pressable>
        </Animated.View>
    )
}

const designs = StyleSheet.create({
    category: {
        paddingVertical: heightPercentage(1),
        // paddingVertical: 12,
        paddingHorizontal: 15,
        borderColor: themes.colors.black,
        backgroundColor: themes.colors.grayBG,
        borderRadius: themes.radius.lg,
        borderWidth: 2,
    },
    title: {
        fontSize: heightPercentage(1.75),
        fontWeight: themes.fontWeights.medium,

    },
})