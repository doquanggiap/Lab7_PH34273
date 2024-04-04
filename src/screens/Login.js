import { Alert, Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TextInputCustom from '../components/TextInputCustom'
import ButtonCustom from '../components/ButtonCustom'
import { auth } from '../../config/firebase'
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import ModalCustom from '../components/ModalCustom'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errMessEmail, setErrMessEmail] = useState('')
    const [errMessPassword, setErrMessPassword] = useState('')

    const [isLoading, setisLoading] = useState(false)


    const handleLogin = async () => {
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

        setisLoading(true)

        await signInWithEmailAndPassword(auth, email, password)
            .catch(() => {
                setErrMessEmail('Email không đúng')
                setErrMessPassword('Mật khẩu không đúng')
            })
            .finally(() => setisLoading(false))
    }
    const handleSignIn = () => {
        navigation.navigate('SignUp')
    }
    const handleForgetPassword = async () => {
        if (email == '') {
            setErrMessEmail('Bạn chưa nhập email')
            return
        }
        setisLoading(true)
        try {
            await sendPasswordResetEmail(auth, email)
            Alert.alert('Thông báo', 'Vui lòng kiểm tra email để đặt lại mật khẩu')
        } catch (error) {
            console.log(error);
            setErrMessEmail('Email này chưa được đăng ký')
        }
        setisLoading(false)
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
                }}>Đăng Nhập</Text>

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
                    title='Đăng Nhập'
                    buttonStyle={{
                        height: 60
                    }}
                    titleStyle={{
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}
                    onPress={handleLogin}
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
                    <TouchableOpacity>
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
                        Bạn chưa có tài khoản?
                    </Text>
                    <TouchableOpacity onPress={handleSignIn}>
                        <Text style={{
                            color: 'blue',
                            fontSize: 15,
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}> Đăng ký</Text>
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
                        Bạn quên mật khẩu?
                    </Text>
                    <TouchableOpacity onPress={handleForgetPassword}>
                        <Text style={{
                            color: 'blue',
                            fontSize: 15,
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}> Bấm vào đây</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <ModalCustom isLoading={isLoading} />

        </View>
    )
}

export default Login

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