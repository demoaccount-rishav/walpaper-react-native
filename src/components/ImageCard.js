import { Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function ImageCardComponent({ item, index, numColumns }) {
    return (
        <Pressable>
            <Image style={styles.image} source={{ uri: item?.webformatURL }} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: '100%'
    },
})