import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState, useRef } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { login } from '../../../services/credencialService/loginApi';
import { Alertmessage, validationText } from '../../../sai-sri-config/constants';
import CustomTextFieldPrimary from '../../../sai-sri-config/customComponents/customTextFieldPrimary';
import CustomPrimaryButton from '../../../sai-sri-config/customComponents/customPrimaryButton';
import colors from '../../../sai-sri-config/colors';
import globalStyles from '../../../globalStyles';
import styles from './LoginStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginAction } from '../../../Redux-toolkit/features/loginData/loginSlice';
import { useDispatch } from 'react-redux';
const LoginPage = () => {
  const [enableEyeIcon, setEnableEyeIcon] = useState<boolean>(false);
  const dispatch = useDispatch()
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>()
  const initialValues = {
    email: '',
    password: '',
  };
  const success = async ({ data }) => {
    try {
      await AsyncStorage.setItem('loginResponseData', JSON.stringify(data))
      dispatch(loginAction.addLoginResData({ payload: data }))
    } catch (error) {
      console.log('error', error)
      Alert.alert(Alertmessage.headingText.failed, error?.message || '', [{ text: Alertmessage.buttonType.ok }]);
    }
    console.log('success', data);
  };
  const { mutate } = login(success);
  const onSubmit = (val: any, onSubmitProps: any) => {
    let formData = new FormData();
    formData.append('email', val.email);
    formData.append('password', val.password);
    mutate(formData);
    onSubmitProps.resetForm();
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Not a proper email').required(`email ${validationText.cannotbeEmptyText}`),
    password: Yup.string().required(`Password ${validationText.cannotbeEmptyText}`).min(3).max(8),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        const {
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
          isSubmitting,
          dirty,
        } = formik;
        return (
          <ScrollView contentContainerStyle={globalStyles.ScrollViewCenter} keyboardShouldPersistTaps={'handled'} >
            <CustomTextFieldPrimary
              value={values.email}
              ref={emailRef}
              label={'Email'}
              onBlur={handleBlur('email')}
              keyboardType={'email-address'}
              onChangeText={handleChange('email')}
              returnKeyType={'next'}
              onEndEditing={() => passwordRef !== null && passwordRef.current.focus()}
              error={errors.email}
              touched={touched.email}
            />

            <CustomTextFieldPrimary
              value={values.password}
              ref={passwordRef}
              label={'Password'}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              touched={touched.password}
              secureTextEntry={!enableEyeIcon}
              returnKeyType={'done'}
              onSubmitEditing={() => handleSubmit()}
              right={<TextInput.Icon icon={enableEyeIcon ? 'eye' : "eye-off"} onPress={() => setEnableEyeIcon((val) => !val)} />}
            />

            <View style={styles.loginButtonContainer}>
              <CustomPrimaryButton name={'LOGIN'} onPress={handleSubmit} color={colors.primary} />
            </View>
          </ScrollView>
        );
      }}
    </Formik>
  );
};
export default LoginPage;