import React, { memo } from 'react'
import { TouchableOpacity, View, Text, } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import { AntDesign } from '@expo/vector-icons';

type CustomDashboardCardType = {
    color: string,
    title: string,
    desc: string,
    footerText: string,
    onPress: () => void
}
const CustomDashboardCard = (props: CustomDashboardCardType) => {
    const { color, title, desc, footerText, onPress } = props
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: color }]} onPress={onPress}>
            <View style={{ padding: 20, paddingHorizontal: 15 }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>{footerText}</Text>
                <AntDesign
                    name="right"
                    size={EStyleSheet.value('$iconSmall')}
                    color={EStyleSheet.value('$white')} />
            </View>
        </TouchableOpacity>
    )
}
export default memo(CustomDashboardCard)

const styles = EStyleSheet.create({
    container: {
        backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`, margin: 10, maxWidth: 150
    },
    desc: {
        fontSize: '$fontSmallParagraph',
        color: '$white',
        marginTop: 10
    },
    title: {
        fontWeight: 'bold',
        color: '$white',
        fontSize: '$fontSmallHeading'
    },
    footer: {
        backgroundColor: '$grey',
        opacity: 0.5, flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center',
        paddingVertical: 5, padding: 10
    },
    footerText: { fontWeight: 'bold', color: '$white' }
}
);