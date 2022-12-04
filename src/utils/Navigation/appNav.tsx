import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardIndex from '../../modules/dashboardModule/DashboardPage';
import DrawerNav from './drawerNav';
import CreateInvoiceIndex from '../../modules/dashboardModule/createInvoicePage';
import EStyleSheet from 'react-native-extended-stylesheet';
import SettlementPage from '../../modules/dashboardModule/settlementPage';
import Collectpaymentpage from '../../modules/dashboardModule/collectPaymentpage';
const Stack = createNativeStackNavigator();
const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: EStyleSheet.value('$primary') } }}>
            <Stack.Screen name="Drawer" component={DrawerNav} options={{ headerShown: false }} />
            <Stack.Screen name="createInvoice" component={CreateInvoiceIndex} />
            <Stack.Screen name="settlement" component={SettlementPage} />
            <Stack.Screen name="collectPayment" component={Collectpaymentpage} />
        </Stack.Navigator>
    )
}
export default AppStack