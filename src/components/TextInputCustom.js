import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';


const TextInputCustom = (props) => {
    return (
        <View>
            <Text style={props.titleStyle}>
                {props.title}
            </Text>
            <TextInput
                style={[st.oNhap, props.style, { borderColor: props.errorMessage ? 'red' : props.borderColor }]}
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor}
                onChangeText={props.onChangeText}
                value={props.value}
            />

            {props.errorMessage && (
                <Text style={{
                    color: 'red',
                    marginLeft: 10,
                }}>
                    {props.errorMessage}
                </Text>
            )}

            {props.errorMessage && (
                <Icon
                    style={{
                        position: 'absolute',
                        right: 20,
                        top: 40
                    }}
                    name='exclamationcircle'
                    size={20}
                    color={'red'} />
            )}



        </View>
    )
}

export default TextInputCustom

const st = StyleSheet.create({
    oNhap: {
        borderWidth: 2,
        borderRadius: 30,
        paddingHorizontal: 20
    }
})