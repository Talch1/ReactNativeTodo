import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { THEME } from '../theme';

export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text} >{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems:'center',
        backgroundColor:THEME.MAIN_COLOR,
        justifyContent:'flex-end',
        paddingBottom:10
    },
    text: {
        color:'white',
        fontSize:20

    }
})