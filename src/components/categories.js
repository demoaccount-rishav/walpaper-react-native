import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryItemComponent from './catergoryItem'
import categoriesList from '@/constants/categoriesList'
import { widthPercentage } from '@/constants/screenCons'

export default function CategoriesComponent({ activeCategory, handleChangeCategory }) {
  // console.log(categoriesList);
  return (
    <View>
      <FlatList
        data={categoriesList}
        horizontal
        contentContainerStyle={designs.flatlistContainer} showsHorizontalScrollIndicator={true}
        keyExtractor={item => item}
        renderItem={({ item, index }) => (
          <CategoryItemComponent
            title={item}
            index={index}
            isActive={activeCategory == item}
            handleChangeCategory={handleChangeCategory}

          />
        )}
      />
    </View>
  )
}

const designs = StyleSheet.create({
  flatlistContainer: {
    paddingHorizontal: widthPercentage(4),
    gap: 8,
  },
})