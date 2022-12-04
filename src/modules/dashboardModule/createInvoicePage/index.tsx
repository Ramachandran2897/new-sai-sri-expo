import { Formik } from 'formik';
import React, { useRef, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import globalStyles from '../../../globalStyles';
import * as Yup from 'yup';
import CustomTextFieldPrimary from '../../../sai-sri-config/customComponents/customTextFieldPrimary';
import { validationText } from '../../../sai-sri-config/constants';
import { Picker } from '@react-native-picker/picker';
import { H1, LabelLarge, Para } from '../../../sai-sri-config/customComponents/CustomTextComponent';
import CustomPrimaryDropDown from '../../../sai-sri-config/customComponents/customDropDown';
import { Button, Divider, IconButton, MD3Colors, RadioButton, TextInput } from 'react-native-paper';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomPrimaryButton from '../../../sai-sri-config/customComponents/customPrimaryButton';
import CustomDevider from '../../../sai-sri-config/customComponents/CustomDevider';
import { Feather } from '@expo/vector-icons';

const CreateInvoiceIndex = () => {
    const priceRef = useRef()
    const quantityRef = useRef()
    const initialValues = {
        selectCustomer: '',
        selectProduct: '',
        price: '',
        quantity: ''
    }
    const validationSchema = Yup.object({
        selectCustomer: Yup.string().required(`customer ${validationText.cannotbeEmptyText}`),
        selectProduct: Yup.string().required(`product ${validationText.cannotbeEmptyText}`).min(3).max(8),
        price: Yup.string().required(`price ${validationText.cannotbeEmptyText}`),
        quantity: Yup.string().required(`quantity ${validationText.cannotbeEmptyText}`)
    });
    const onSubmit = () => {

    }
    const selectCustomer = [
        { label: 'hello', value: 'Hello' },
        { label: 'ram', value: 'Ram' }
    ]
    const [value, setValue] = React.useState('first');
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
                    <View>
                        <ScrollView contentContainerStyle={globalStyles.ScrollViewCenter} keyboardShouldPersistTaps={'handled'} >
                            <H1>Invoice details</H1>
                            <LabelLarge>Select Customer</LabelLarge>
                            <CustomPrimaryDropDown listOfItem={selectCustomer} />
                            <LabelLarge>Balance</LabelLarge>
                            <Para>$0.00</Para>
                            <CustomDevider />
                            <LabelLarge>Product</LabelLarge>
                            <CustomPrimaryDropDown listOfItem={selectCustomer} />
                            <CustomTextFieldPrimary
                                value={values.price}
                                ref={priceRef}
                                label={'Price'}
                                onChangeText={handleChange('price')}
                                onBlur={handleBlur('price')}
                                error={errors.price}
                                touched={touched.price}
                                returnKeyType={'next'}
                                onSubmitEditing={handleSubmit}
                            />
                            <CustomTextFieldPrimary
                                value={values.quantity}
                                ref={quantityRef}
                                label={'Quantity'}
                                onChangeText={handleChange('quantity')}
                                onBlur={handleBlur('quantity')}
                                error={errors.quantity}
                                touched={touched.quantity}
                                returnKeyType={'done'}
                                onSubmitEditing={handleSubmit}
                            />
                            <CustomPrimaryButton name={'ADD'} onPress={handleSubmit} />
                            <View>

                            </View>
                            <CustomDevider />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <LabelLarge>Sub Total</LabelLarge>
                                </View>
                                <View >
                                    <Para>$0.00</Para>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', flex: 1, alignItems: 'center' }}>
                                <View style={{ flex: 0.7 }}>
                                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 10 }}>
                                                <RadioButton color={EStyleSheet.value('$primary')} value="first" />
                                                <Text>Without GST</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <RadioButton value="second" />
                                                <Text>With GST</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <RadioButton value="second" />
                                                <Text>GST Excluted</Text>
                                            </View>
                                        </View>
                                    </RadioButton.Group>
                                </View>
                                <View >
                                    <Para>$0.00</Para>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <LabelLarge>Total</LabelLarge>
                                </View>
                                <View >
                                    <Para>$0.00</Para>
                                </View>
                            </View>
                            <LabelLarge>Payment Mode</LabelLarge>
                            <CustomPrimaryDropDown listOfItem={selectCustomer} />
                            <CustomTextFieldPrimary
                                label="Paid Amount"
                                left={<TextInput.Icon icon={'currency-usd'} />}
                                keyboardType='numeric'
                            />
                            <LabelLarge>Payment Mode</LabelLarge>
                            <CustomPrimaryDropDown listOfItem={selectCustomer} />
                            <View style={{ flexDirection: 'row', alignItems: 'baseline', }}>
                                <View style={{ flex: 1 }}>
                                    <CustomTextFieldPrimary
                                        label="Paid Amount"
                                        left={<TextInput.Icon icon={'currency-usd'} />}
                                        keyboardType='numeric'
                                    />
                                </View>
                                <View>
                                    <IconButton
                                        style={{ margin: 0 }}
                                        icon="minus-box"
                                        iconColor={EStyleSheet.value('$danger')}
                                        size={50}
                                        onPress={() => console.log('Pressed')}
                                    />
                                </View>
                            </View>
                            <IconButton
                                style={{ marginLeft: 'auto', margin: 0 }}
                                icon="plus-box"
                                iconColor={EStyleSheet.value('$primary')}
                                size={50}
                                onPress={() => console.log('Pressed')}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <LabelLarge>Balance</LabelLarge>
                                </View>
                                <View >
                                    <Para>$0.00</Para>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                )
            }
            }
        </Formik>
    )
}

export default CreateInvoiceIndex;