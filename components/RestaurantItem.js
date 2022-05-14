import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function RestaurantItem(props) {
    return (
        <>
            {
                props.restaurantData.map((item, index) => (
                    <TouchableOpacity  activeOpacity={0.8} key={index} style={{ marginTop: 10, paddingHorizontal: 10, backgroundColor: '#eee' }}>
                        <RestaurantImage url={item.image_url} />
                        <RestaurantInfo name={item.name}  rating={item.rating} />
                    </TouchableOpacity>
                ))
            }
        </>
    )
}

const RestaurantImage = ({url}) => (
    <>
        <Image style={{ width: '100%', height: 180 }} source={{ uri: url}} />
        <TouchableOpacity style={{ position: 'absolute', top: 15, right: 20 }}>
            <MaterialCommunityIcons name='heart-outline' color={'white'} size={26} />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = ({name,rating}) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>
            <Text style={{ fontSize: 13, color: 'gray' }}>30 - 40 min</Text>
        </View>
        <Text style={{ height: 30, width: 30 }}>{rating}</Text>
    </View>
)
export const RestaurantLocal = [
    {
        name: 'Coin chaud',
        image_url: 'https://www.lecoinchaud.com/media/filer_public_thumbnails/filer_public/20/d1/20d18042-ab9b-4234-be27-2f125ed9315f/restaurant-le-coin-chaud-le-lioran.jpg__1024.0x682.6666666666666_q85_crop-10_subsampling-2_upscale.jpg',
        categories: ['Cafee', 'Bar'],
        price: '$$',
        reviews: 1244,
        rating: 4.5
    },
    {
        name: 'Banihana',
        image_url: 'https://ad962edbae8ba7b03b7f-d10007df79b5b7a4e475a291e50a08cf.ssl.cf3.rackcdn.com/creer-un-restaurant/creer-un-restaurant.jpg',
        categories: ['Cafee', 'Bar'],
        price: '$$',
        reviews: 1244,
        rating: 4.5
    },
    {
        name: 'Asdikae',
        image_url: 'https://img-0.journaldunet.com/DdLmeY6qn48yFQky0_LPZzRYG7I=/1500x/smart/b54c75bdbe1b443d82767c4fc57a2842/ccmcms-jdn/10701662.jpg',
        categories: ['Cafee', 'Bar'],
        price: '$$',
        reviews: 1244,
        rating: 4.5
    },
    {
        name: 'Sombara',
        image_url: 'https://ad962edbae8ba7b03b7f-d10007df79b5b7a4e475a291e50a08cf.ssl.cf3.rackcdn.com/creer-un-restaurant/creer-un-restaurant.jpg',
        categories: ['Cafee', 'Bar'],
        price: '$$',
        reviews: 1244,
        rating: 4.5
    },
]