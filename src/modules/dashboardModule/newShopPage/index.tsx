import React from "react"
import { View, Text } from "react-native"
import globalStyles from "../../../globalStyles"
import CustomDevider from "../../../sai-sri-config/customComponents/CustomDevider"
import CustomTable from "../../../sai-sri-config/customComponents/CustomTable"
import { H1 } from "../../../sai-sri-config/customComponents/CustomTextComponent"

const NewShopPage = () => {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];
    return (
        <View style={globalStyles.container}>
            <H1>Customers</H1>
            <CustomDevider />
            <CustomTable data={DATA} searchbar={true} />
        </View>
    )
}
export default NewShopPage