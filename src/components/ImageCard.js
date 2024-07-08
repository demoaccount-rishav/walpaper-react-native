import { Pressable, StyleSheet } from 'react-native';
import { Image } from 'expo-image'
import React from 'react'
import { getImageSize, heightPercentage, widthPercentage } from '@/constants/screenCons';
import themes from '@/constants/themes';

export default function ImageCardComponent({ item, index, numColumns }) {

    const getImageHeight = () => {

        let { imageWidth: width, imageHeight: height } = item;

        return { height: getImageSize(width, height) };
    }

    const isLastRow = () => {
        return ((index + 1) % numColumns) === 0;
    }

    return (
        <Pressable style={[styles.imageWrapper, !isLastRow() && styles.spacing]}>
            <Image
                style={[styles.image, getImageHeight()]}
                source={item?.webformatURL}
                // contentFit="cover"
                transition={1000}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: '100%'
    },
    imageWrapper: {
        backgroundColor: themes.colors.grayBG,
        borderRadius: themes.radius.xl,
        borderCurve: 'continuous',
        overflow: 'hidden',
        marginBottom: heightPercentage(2),
    },
    spacing: {
        marginRight: widthPercentage(2),
    }
})