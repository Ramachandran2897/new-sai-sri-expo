/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable eqeqeq */
/* eslint-disable semi */
/* eslint-disable quotes */
// import { connect } from 'react-redux';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import LoaderAction from "../redux/loader/LoaderAction";
// import { set_Token, remove_Token } from "../redux/UserToken/UserTokenTypes";
import { Alert } from "react-native";
import { Alertmessage } from "../sai-sri-config/constants";
// import { useNavigation } from '@react-navigation/native';
export const postApi = (url: string, data: any, headers: any) => {
    console.log(url, data, headers)
    return axios.post(url, data, headers).then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return new Promise((resolve) => {
                console.log("resolve", response);
                resolve(response);
            });
        }
    });
}

export const getApi = (url: string) => {
    return axios.get(url).then((response) => {
        if (response.status == 200) {
            return new Promise((resolve) => {
                console.log("resolve", response);
                resolve(response);
            });
        }
    });
}
export const checkTokenExpTime = async () => {
    let currentTime = new Date().getTime();
    const expTime = Number(await AsyncStorage.getItem("expTime"));
    const checkExpTime = Number(await AsyncStorage.getItem("checkExpTime"));
    if (expTime > currentTime && checkExpTime < currentTime) {
        //@ts-ignore
        return refreshToken()
    }
    if (expTime < currentTime) {
        //@ts-ignore
        return getNewToken()
    }
    return true
}
export const checkLoginStatus = async () => {
    const token = await AsyncStorage.getItem("userToken");
    if (token) {
        return true
    }
    return false
}
export const refreshToken = () => {
    let currentTime = new Date().getTime();
    //@ts-ignore
    if (!checkLoginStatus()) {
        Alert.alert(Alertmessage.headingText.failed, Alertmessage.description.somethingWrongOnLogin, [{ text: Alertmessage.buttonType.ok }]);
        return false
    }
    return postApi(`auth/refresh`, {}, {
        headers: {
            "Content-Type": `multipart/form-data`,
        },
    }).then(async (res) => {
        await Promise.all([
            //@ts-ignore
            AsyncStorage.setItem("userToken", res.data.data.token),
            //@ts-ignore
            AsyncStorage.setItem("expTime", (currentTime + res.data.data.expires_in).toString()),
            //@ts-ignore
            AsyncStorage.setItem("checkExpTime", (currentTime + res.data.data.expires_in - 500).toString())
        ])
        return true
    })
}
export const getNewToken = () => {
    let currentTime = new Date().getTime();
    if (!checkLoginStatus()) {
        Alert.alert(Alertmessage.headingText.failed, Alertmessage.description.somethingWrongOnLogin, [{ text: Alertmessage.buttonType.ok }]);
        return false
    }
    return postApi(`auth/refresh`, {}, {
        headers: {
            "Content-Type": `multipart/form-data`,
        },
    }).then(async (res) => {
        await Promise.all([
            //@ts-ignore
            AsyncStorage.setItem("userToken", res.data.data.token),
            //@ts-ignore
            AsyncStorage.setItem("expTime", (currentTime + res.data.data.expires_in).toString()),
            //@ts-ignore
            AsyncStorage.setItem("checkExpTime", (currentTime + res.data.data.expires_in - 500).toString())
        ])
        return true
    })
}
// type useCustomMiddleWareForApiType = {
//     method: 'Get' | 'Post';
//     url: string;
//     data: any;
//     headers: any
// }
const useCustomMiddleWareForApi = (...props: any) => {
    // if (!checkTokenExpTime()) {
    //     Alert.alert(Alertmessage.headingText.failed, Alertmessage.description.somethingWrongOnLogin, [{ text: Alertmessage.buttonType.ok }]);
    // }
    const [method, url, data, headers] = props;
    if (method !== "Get") {
        return postApi(url, data, headers)
    }
    return getApi(url)
};
export default useCustomMiddleWareForApi;
