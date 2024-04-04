import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalCustom = (props) => {
    return (
        <Modal
            visible={props.isLoading}
            animationType='fade'
            transparent
        >
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: '50%',
                    height: 100,
                    borderRadius: 10,
                    padding: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: '#67d6b0',
                    }}>Đang tải...</Text>

                </View>

            </View>

        </Modal>
    )
}

export default ModalCustom

const styles = StyleSheet.create({})