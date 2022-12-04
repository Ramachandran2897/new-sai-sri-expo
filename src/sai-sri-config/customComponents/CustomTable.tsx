import React, { memo } from 'react'
import { FlatList, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LabelLarge, SmallPara } from './CustomTextComponent'
const Item = ({ title, index }) => (
    <View style={[{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }, index % 2 === 1 && { backgroundColor: '#D3D3D3' }]}>
        <View style={{ flex: 1, flexWrap: 'wrap', paddingHorizontal: 10, }}>
            <SmallPara>{title}</SmallPara>
        </View>
        <View style={{ flex: 1, flexWrap: 'wrap', paddingHorizontal: 10, }}>
            <SmallPara>{title}</SmallPara>
        </View>
        <View style={{ flex: 1, flexWrap: 'wrap', paddingHorizontal: 10, }}>
            <SmallPara>{title}</SmallPara>
        </View>
        <View style={{ flex: 1, flexWrap: 'wrap', paddingHorizontal: 10, }}>
            <SmallPara>{title}</SmallPara>
        </View>
    </View>
);
const CustomTablePrimary = ({ data }) => {
    const renderItem = (props) => {
        return (
            <Item title={props.item.title} index={props.index} />
        )
    }
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <View style={{ flex: 1, flexWrap: 'wrap', paddingHorizontal: 10, borderColor: EStyleSheet.value('$grey'), borderWidth: 1, backgroundColor: EStyleSheet.value('$primary') }}>
                    <LabelLarge color="white">#</LabelLarge>
                </View>
                <View style={{ flex: 1, flexWrap: 'wrap', paddingHorizontal: 10, borderColor: EStyleSheet.value('$grey'), borderWidth: 1, backgroundColor: EStyleSheet.value('$primary') }}>
                    <LabelLarge color="white">#</LabelLarge>
                </View>
                <View style={{ flex: 1, flexWrap: 'wrap', paddingHorizontal: 10, borderColor: EStyleSheet.value('$grey'), borderWidth: 1, backgroundColor: EStyleSheet.value('$primary') }}>
                    <LabelLarge color="white">#</LabelLarge>
                </View>
                <View style={{ flex: 1, flexWrap: 'wrap', paddingHorizontal: 10, borderColor: EStyleSheet.value('$grey'), borderWidth: 1, backgroundColor: EStyleSheet.value('$primary') }}>
                    <LabelLarge color="white">#</LabelLarge>
                </View>
            </View>
            <View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}
export default memo(CustomTablePrimary)