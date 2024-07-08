import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MasonryFlashList } from '@shopify/flash-list';
import ImageCardComponent from './ImageCard';
import { getCoulumnCount, widthPercentage } from '@/constants/screenCons';

export default function ImageGridComponent({ images }) {

    const numColumns = getCoulumnCount();

    return (
        <View style={designs.container}>
            <MasonryFlashList
                data={images}
                numColumns={numColumns}
                initialNumToRender={1000}
                renderItem={({ item, index }) => (
                    <ImageCardComponent index={index} item={item} numColumns={numColumns} />
                )}
                estimatedItemSize={200}
                contentContainerStyle={designs.listContainerStyle}
            />
        </View>
    )
}

const designs = StyleSheet.create({
    container: {
        minHeight: 3,
        width: widthPercentage(100),
    },
    listContainerStyle: {
        paddingHorizontal: widthPercentage(4),
    },
})