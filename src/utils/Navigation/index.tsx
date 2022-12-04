import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert } from "react-native";
import { useSelector } from "react-redux";
import AppStack from "./appNav";
import AuthStack from "./authNav";

const Navigation = () => {
    const authToken = useSelector((state) => state?.loginData)
    return (
        <NavigationContainer>
            {!(authToken?.data?.payload?.authorisation?.token && authToken?.data?.payload?.authorisation?.token !== null) ? <AuthStack /> : <AppStack />}
        </NavigationContainer>
    )
}
export default Navigation