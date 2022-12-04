import { Picker } from "@react-native-picker/picker"
import React, { memo, useState } from "react"
import { View } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"
type customDropDownTypes = {
    listOfItem: { label: string, value: string }[]
}
const CustomPrimaryDropDown = ({ listOfItem }: customDropDownTypes) => {
    const [value, selectValue] = useState()
    return (
        <Picker
            style={{ backgroundColor: EStyleSheet.value('$secondary') }}
            mode='dropdown'
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) =>
                selectValue(itemValue)
            }>
            {listOfItem && listOfItem.map(({ label, value }) => <Picker.Item label={label} value={value} key={value} />)}
        </Picker>
    )
}
export default memo(CustomPrimaryDropDown)