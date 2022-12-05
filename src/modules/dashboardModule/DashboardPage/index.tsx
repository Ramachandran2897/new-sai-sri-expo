import React from 'react'
import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import globalStyles from '../../../globalStyles'
import CustomDashboardCard from '../../../sai-sri-config/customComponents/CustomDashboardCard'
import CustomPrimaryTable from '../../../sai-sri-config/customComponents/CustomTable'
import styles from './DashboardPageStyles'
const DashboardIndex = (props) => {
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
    const optionsPerPage = [1, 2, 3];
    const [page, setPage] = React.useState<number>(optionsPerPage[0]);
    const [itemsPerPage, setItemsPerPage] = React.useState(1);
    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);
    const num = [
        { id: 1, title: 'Bill', desc: 'Create New Invoice', footerText: 'Create bill', onPress: () => props.navigation.navigate('createInvoice') },
        { id: 2, title: '0', desc: 'Cash to handover', footerText: 'Settle amount', onPress: () => props.navigation.navigate('settlement') },
        { id: 3, title: 'Un payed bills ', desc: 'View invoice', footerText: 'Colect Payment', onPress: () => props.navigation.navigate('collectPayment') },
        { id: 4, title: 'Unload ', desc: 'unload remaining products', footerText: 'Unload Products', onPress: () => props.navigation.navigate('unloadProduct') },
        { id: 5, title: 'New Shop ', desc: 'Create new shop', footerText: 'Add new shop', onPress: () => props.navigation.navigate('newShop') },
    ]
    return (
        <View style={globalStyles.container}>
            <View style={styles.container}>
                {num.map(({ id, ...restObj }) =>
                    <View key={id}>
                        <CustomDashboardCard {...restObj} color={EStyleSheet.value('$primary')} />
                    </View>
                )}
            </View>
            <CustomPrimaryTable data={DATA} searchbar={false} />
        </View>
    )
}
export default DashboardIndex