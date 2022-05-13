import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'

export const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: 'gray', padding: 10 }}>
                <HeaderTabs />
                <SearchBar/>
                <Categories/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 22,
        backgroundColor: '#eee'
    }
})
