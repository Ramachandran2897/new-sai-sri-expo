import { FormikErrors } from 'formik'
import React, { memo } from 'react'
import { View, Text } from 'react-native'
import colors from '../colors'
type CustomErrorMessageType = {
    children: any
}
const CustomErrorMessage = ({ children }: CustomErrorMessageType) => {
    return (
        <View style={{ paddingLeft: 10 }}>
            <Text style={{ color: colors.danger }}>{children}</Text>
        </View>
    )
}
export default memo(CustomErrorMessage)