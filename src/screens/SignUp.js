import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TextInputCustom from '../components/TextInputCustom'
import ButtonCustom from '../components/ButtonCustom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'
import ModalCustom from '../components/ModalCustom'

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errMessEmail, setErrMessEmail] = useState('')
    const [errMessPassword, setErrMessPassword] = useState('')

    const [isLoading, setisLoading] = useState(false)


    const handleSignUp = async () => {
        if (email === '' && password === '') {
            setErrMessEmail('Vui lòng nhập email')
            setErrMessPassword('Vui lòng nhập password')
            return
        }

        if (email === '') {
            setErrMessEmail('Vui lòng nhập email')
            return
        }

        if (password === '') {
            setErrMessPassword('Vui lòng nhập password')
            return
        }

        const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!validateEmail.test(email)) {
            setErrMessEmail('Email không đúng định dạng')
            return
        }

        const validatePass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
        if (!validatePass.test(password)) {
            setErrMessPassword('Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ cái và số')
            return
        }

        setisLoading(true)

        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => Alert.alert('Thông báo', 'Đăng ký thành công'))
            .catch((err) => Alert.alert('Thông báo thất bại', err.message))
            .finally(() => setisLoading(false))
    }

    const handleLoginWithGG = () => {
        Alert.alert('Thông báo', 'Đăng nhập bằng google')
    }

    const handleLogin = () => {
        navigation.navigate('Login')
    }
    return (
        <View style={{
            flex: 1,
            padding: 20,
        }}>
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'blue',
                    marginBottom: 20
                }}>Đăng ký</Text>

            <View style={{
                width: '100%',
                height: 400,
                justifyContent: 'space-evenly',
            }}>
                <TextInputCustom
                    title='Email'
                    titleStyle={st.titleStyle}
                    placeholder='Nhập email của bạn'
                    placeholderTextColor='gray'
                    style={st.style}
                    onChangeText={(text) => {
                        setEmail(text)
                        setErrMessEmail('')
                    }}
                    value={email}
                    errorMessage={errMessEmail}
                />

                <TextInputCustom
                    title='Mật Khẩu'
                    titleStyle={st.titleStyle}
                    placeholder='Nhập password của bạn'
                    placeholderTextColor='gray'
                    style={st.style}
                    onChangeText={(text) => {
                        setPassword(text)
                        setErrMessPassword('')
                    }}
                    value={password}
                    errorMessage={errMessPassword}

                />
                <ButtonCustom
                    title='Đăng ký'
                    buttonStyle={{
                        height: 60
                    }}
                    titleStyle={{
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}
                    onPress={handleSignUp}
                />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}>
                        Hoặc đăng nhập bằng
                    </Text>
                    <TouchableOpacity onPress={handleLoginWithGG}>
                        <Image
                            source={{ uri: 'https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK' }}
                            width={30}
                            height={30}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}>
                        Bạn đã có tài khoản?
                    </Text>
                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={{
                            color: 'blue',
                            fontSize: 15,
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}> Đăng nhập</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <ModalCustom isLoading={isLoading} />



        </View>
    )
}

export default SignUp

const st = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    style: {
        borderWidth: 2,
        borderRadius: 30,
        paddingHorizontal: 20
    }
})