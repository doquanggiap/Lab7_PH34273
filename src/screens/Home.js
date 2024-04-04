import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../../config/firebase'
import { signOut } from 'firebase/auth'

const Home = ({ navigation }) => {
    const handleSignOut = async () => {
        await signOut(auth)
            .then(() => navigation.navigate('Login'))
            .catch((err) => Alert.alert('Thông báo thất bại', err.message))
    }
    return (
        <View>
            <Text>Home</Text>
            <Button title='Đăng xuất' onPress={handleSignOut} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})