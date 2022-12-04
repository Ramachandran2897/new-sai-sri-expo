/* eslint-disable prettier/prettier */
import { FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import { forwardRef } from 'react';
import { memo } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import colors from '../colors';
import CustomErrorMessage from './customErrorMessage';
type CustomTextFieldPrimaryType = {
    error: string | FormikErrors<any> | string[] | FormikErrors<any>[],
    touched: boolean | FormikTouched<any> | FormikTouched<any>[],
} & Omit<React.ComponentProps<typeof TextInput>, `touched` | `error`>;
const CustomTextFieldPrimary = forwardRef((props: CustomTextFieldPrimaryType, ref: any) => {
    const { error, touched, ...rest } = props
    return (
        <View>
            <TextInput
                ref={ref}
                mode="outlined"
                {...rest}
                outlineColor={colors.primary} activeOutlineColor={colors.primary}
                style={{ marginVertical: 10 }}
            />
            {(touched && error) &&
                <CustomErrorMessage>{error}</CustomErrorMessage>}
        </View>
    );
})
export default CustomTextFieldPrimary;
