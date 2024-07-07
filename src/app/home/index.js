import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useRef } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FontAwesome6, AntDesign, Octicons } from '@expo/vector-icons';
import themes from '@/constants/themes';
import { heightPercentage, widthPercentage } from '@/constants/screenCons';
import CategoriesComponent from '@/components/categories';

export default function index() {

    const top = useSafeAreaInsets().top;
    const paddingTop = top > 0 ? top + 10 : 30;
    const [searchText, setsearchText] = useState("");
    const searchInputRef = useRef(null);
    const [activeCategory, setactiveCategory] = useState(null);

    console.log('Active Category', activeCategory);
    
    const handleChangeCategory = (category) => {
        setactiveCategory(category);
    }

    return (
        <View style={[designs.container, { paddingTop }]}>

            {/* Header Section */}
            <View style={designs.header}>
                <Pressable>
                    <Text style={designs.title}>
                        Walpy
                    </Text>
                </Pressable>
                <Pressable>
                    <FontAwesome6 name="bars-staggered" size={22} color={themes.colors.neutral(0.7)} />
                </Pressable>
            </View>

            <ScrollView contentContainerStyle={{ gap: 15 }}>

                {/* Search Bar */}
                <View style={designs.SearchBar}>
                    <Octicons name="search" size={24} color={themes.colors.neutral(0.4)} />
                    <TextInput value={searchText} ref={searchInputRef} onChangeText={v => setsearchText(v)} placeholder='Search...' style={designs.searchInput} />


                    {
                        searchText && (
                            <Pressable style={designs.closeIcon} onPress={() => setsearchText('')}>
                                <AntDesign name='close' size={22} color={themes.colors.neutral(0.8)} />
                            </Pressable>

                        )
                    }
                </View>

                {/* Categories */}
                <View style={designs.categories}>
                    <CategoriesComponent
                        activeCategory={activeCategory}
                        handleChangeCategory={handleChangeCategory}
                    />
                </View>

            </ScrollView>



        </View>
    )
}

const designs = StyleSheet.create({

    container: {
        flex: 1,
        gap: 15
    },
    header: {
        marginHorizontal: widthPercentage(4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: heightPercentage(4),
        fontWeight: themes.fontWeights.semibold,
        color: themes.colors.neutral(0.9)
    },
    SearchBar: {
        marginHorizontal: widthPercentage(4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: themes.colors.grayBG,
        backgroundColor: themes.colors.white,
        padding: 6,
        paddingLeft: 10,
        borderRadius: themes.radius.lg,
    },
    searchBarIcon: {
        padding: 8,
    },
    searchInput: {
        flex: 1,
        borderRadius: themes.radius.sm,
        paddingHorizontal: 10,
        fontSize: heightPercentage(1.8)

    },
    closeIcon: {
        backgroundColor: themes.colors.neutral(0.05),
        padding: 8,
        borderRadius: themes.radius.lg,

    },
    // categories:{
    //     height: 10,
    //     width: 10
    // },
})