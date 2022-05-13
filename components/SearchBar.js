import { AntDesign, Ionicons } from '@expo/vector-icons'
import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

export default function SearchBar() {
  return (
    <View style={{marginTop:15,flexDirection:'row'}}>
        <GooglePlacesAutocomplete 
            placeholder='Search ...' 
            styles={{
                textInput:{
                    backgroundColor:'#eee',
                    borderRadius:20,
                    fontWeight:'700',
                },
                textInputContainer:{
                    backgroundColor:'#eee',
                    borderRadius:20,
                    flexDirection:'row',
                    alignItems:'center',
                },
            }}    
            renderLeftButton={()=>(
                <View style={{marginLeft:10}}>
                    <Ionicons name='location-sharp' size={24}/>
                </View>
            )}
            renderRightButton={()=>(
                <View style={{flexDirection:'row',
                    marginRight:8, backgroundColor:'white',padding:9,borderRadius:30,alignItems:'center'}}>
                    <AntDesign name='clockcircle' size={11} style={{marginRight:8}}/>
                    <Text>Search</Text>
                </View>
            )}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:22,
        backgroundColor:'#eee'
    }
})