import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { View, Text, Pressable, Alert } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alertmessage } from '../../sai-sri-config/constants';
import { store } from '../../Redux-toolkit/app/store';
import { loginAction } from '../../Redux-toolkit/features/loginData/loginSlice';

const CustomDrawer = (props) => {
    const onPress = async () => {
        try {
            const removeItem = await AsyncStorage.removeItem('loginResponseData')
            store.dispatch(loginAction.addLoginResData({ payload: removeItem }))
        } catch (error) {
            Alert.alert(Alertmessage.headingText.failed, error?.message || '', [{ text: Alertmessage.buttonType.ok }]);
        }
    }
    return (
        <>
            <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>
            </View>
            <Pressable onPress={onPress} android_ripple={styles.text} style={styles.logoutButtonStyle}>
                <Text style={styles.text}>Logout</Text>
            </Pressable>
        </>
    )
}
export default CustomDrawer

const styles = EStyleSheet.create({
    loginButtonContainer: {
        marginTop: 10,
    },
    logoutButtonStyle: { margin: 10, padding: 10, backgroundColor: '$quaternary', borderRadius: 5 },
    text: { color: '$textColor', fontWeight: 'bold' }
}
);