import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonCustom = (props) => {
    return (
        <TouchableOpacity
            style={[st.btn, props.buttonStyle]}
            onPress={props.onPress}
        >
            <Text style={[st.text, props.titleStyle]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonCustom

const st = StyleSheet.create({
    btn: {
        width: '100%',
        height: 70,
        backgroundColor: 'red',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: 'white',
        fontSize: 20,
        // fontWeight: 'bold',
    }
})