import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState('Delivery')
    return (
        <View style={styles.container}>
            <HeaderButton text='Delivery' colorButton='black' colorText='white'
                activeTab={activeTab} setActiveTab={setActiveTab} />
            <HeaderButton text='Pickup' colorButton='white' colorText='black'
                activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
    )
}
const HeaderButton = (props) => (
    <TouchableOpacity 
        style={{
            backgroundColor: props.activeTab === props.text ? 'black' : 'white',
            padding: 6, paddingHorizontal: 16,
            borderRadius: 30,marginLeft:5
        }}
        onPress={() => props.setActiveTab(props.text)}>
        <Text style={{ color: props.activeTab === props.text ? 'white' : 'black', fontSize: 15, fontWeight: 'bold' }}>{props.text}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
    }
})
