import React from "react";
import axios from "axios";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alertmessage, url } from "../sai-sri-config/constants";

axios.interceptors.request.use(
  async (request) => {
    request.url = `${url.stagingBaseUrl}${request.url}`;
    let token
    try {
      token = JSON.parse(await AsyncStorage.getItem('loginResponseData')).authorisation.token
    } catch (error) {
      Alert.alert(Alertmessage.headingText.failed, error?.name || '', [{ text: Alertmessage.buttonType.ok }]);
    }
    request.headers.Authorization = `Bearer ${token}` || undefined;
    console.log("request hello", request);
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log("response hello", response);
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 401) {
      Alert.alert(
        Alertmessage.headingText.failed,
        `${Alertmessage.description.unauthorized} ${error.response.data.message}`,
        [{ text: Alertmessage.buttonType.ok }]
      );
    } else if (error.response.status === 500) {
      Alert.alert(
        Alertmessage.headingText.failed,
        `${Alertmessage.description.serverError}`,
        [{ text: Alertmessage.buttonType.ok }]
      );
    } else if (error.response.status === 404) {
      Alert.alert(
        Alertmessage.headingText.failed,
        `${Alertmessage.description.pagenotFound} ${error.response.data.message}`,
        [{ text: Alertmessage.buttonType.ok }]
      );
    } else if (error.response.status === 403) {
      Alert.alert(
        Alertmessage.headingText.failed,
        `${Alertmessage.description.accessForbidden}`,
        [{ text: Alertmessage.buttonType.ok }]
      );
    } else if (error.response.status === 503) {
      Alert.alert(
        Alertmessage.headingText.failed,
        `${Alertmessage.description.serviceUnavaliable}`,
        [{ text: Alertmessage.buttonType.ok }]
      );
    }
    // return error;
    return Promise.reject(error);
  }
);
