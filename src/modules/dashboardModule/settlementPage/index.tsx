import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import globalStyles from '../../../globalStyles'
import CustomDevider from '../../../sai-sri-config/customComponents/CustomDevider'
import CustomPrimaryButton from '../../../sai-sri-config/customComponents/customPrimaryButton'
import { H1, LabelLarge, Para } from '../../../sai-sri-config/customComponents/CustomTextComponent'
import CustomTextFieldPrimary from '../../../sai-sri-config/customComponents/customTextFieldPrimary'

const SettlementPage = () => {
    return (
        <View>
            <ScrollView contentContainerStyle={globalStyles.ScrollViewCenter} keyboardShouldPersistTaps={'handled'}>
                <H1>Payment Collection</H1>
                <LabelLarge>Balance</LabelLarge>
                <Para>$0.00</Para>
                <LabelLarge>Expenses</LabelLarge>
                <Para>$0.00</Para>
                <CustomTextFieldPrimary
                    label={'Amount'}
                    keyboardType='numeric' error={''} touched={false} />
                <CustomDevider />
                <CustomTextFieldPrimary
                    label={'Hand over to'}
                    placeholder="Enter username" error={''} touched={false} />
                <CustomTextFieldPrimary
                    label={'Notes'}
                    placeholder="Enter notes"
                    multiline={true}
                    numberOfLines={4} error={''} touched={false} />
                <CustomPrimaryButton name={'SETTLE'} />
            </ScrollView>
        </View>
    )
}
export default SettlementPage