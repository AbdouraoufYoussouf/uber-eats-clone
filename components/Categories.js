import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'

export default function Categories() {

  const items = [
    {
      image: require('../assets/images/shopping-bag.png'),
      text: 'Pick-up'
    },
    {
      image: require('../assets/images/soft-drink.png'),
      text: 'Soft Drinks'
    },
    {
      image: require('../assets/images/bread.png'),
      text: 'Bakery Items'
    },
    {
      image: require('../assets/images/deals.png'),
      text: 'Fast Food'
    },
    {
      image: require('../assets/images/shopping-bag.png'),
      text: 'Deals'
    },
    {
      image: require('../assets/images/coffee.png'),
      text: 'Coffee & Tea'
    },
    {
      image: require('../assets/images/desserts.png'),
      text: 'Desserts'
    },
  ]

  return (
    <View style={{marginTop:5,backgroundColor:'#eee',paddingVertical:10,paddingLeft:10}}>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        items.map((item, index) => (
          <View key={index} style={{ alignItems: 'center', marginRight: 30 }}>
            <Image source={item.image} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{item.text}</Text>
          </View>
        ))
      }
    </ScrollView>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
    backgroundColor: '#eee'
  }
})
