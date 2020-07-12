import React from 'react'
import { View, StyleSheet } from 'react-native'

export const AppCard = props =>
    (
        <View style={{...styles.defolte,...props.style}}>
            {props.children}
        </View>
    )

const styles = StyleSheet.create({
    defolte: {
        borderRadius:5,
        backgroundColor:'#fff',
        shadowColor:'#000',
        shadowRadius:2,
        shadowOpacity:2,
        elevation:8,
        padding: 20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        
    }
})