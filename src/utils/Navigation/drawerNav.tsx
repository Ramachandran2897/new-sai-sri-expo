import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardIndex from '../../modules/dashboardModule/DashboardPage';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomDrawer from './customDrawer'

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
    return (
        <Drawer.Navigator initialRouteName='Dashboard' drawerContent={props => <CustomDrawer {...props} />} screenOptions={{ headerStyle: { backgroundColor: EStyleSheet.value('$primary') } }}>
            <Drawer.Screen name="Dashboard" component={DashboardIndex} />
        </Drawer.Navigator>
    )
}
export default DrawerNav