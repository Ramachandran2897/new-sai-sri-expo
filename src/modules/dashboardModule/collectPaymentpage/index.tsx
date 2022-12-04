import React from 'react'
import { ScrollView, View } from 'react-native'
import globalStyles from '../../../globalStyles'
import { H1, LabelLarge, Para } from '../../../sai-sri-config/customComponents/CustomTextComponent'
import CustomPrimaryDropDown from '../../../sai-sri-config/customComponents/customDropDown'
import CustomDevider from '../../../sai-sri-config/customComponents/CustomDevider'
import CustomPrimaryButton from '../../../sai-sri-config/customComponents/customPrimaryButton'
const Collectpaymentpage = () => {
    const selectCustomer = [
        { label: 'hello', value: 'Hello' },
        { label: 'ram', value: 'Ram' }
    ]
    return (
        <View>
            <ScrollView contentContainerStyle={globalStyles.ScrollViewCenter} keyboardShouldPersistTaps={'handled'}>
                <H1>Payment Collection</H1>
                <LabelLarge>Select Customer</LabelLarge>
                <CustomPrimaryDropDown listOfItem={selectCustomer} />
                <LabelLarge>Balance</LabelLarge>
                <Para>$0.00</Para>
                <CustomDevider />
                <CustomPrimaryButton name="Save" />
            </ScrollView>
        </View>
    )
}
export default Collectpaymentpage