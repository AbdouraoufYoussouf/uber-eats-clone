import React ,{useState} from 'react'
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItem, { RestaurantLocal } from '../components/RestaurantItem'
import SearchBar from '../components/SearchBar'

export const Home = () => {
    const [restaurantData,setRestaurantData] = useState(RestaurantLocal)
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: 'white',}}>
                <HeaderTabs />
                <SearchBar />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Categories />
                    <RestaurantItem restaurantData={restaurantData} />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 22,
        backgroundColor: '#eee',
        marginBottom:100
    }
})
