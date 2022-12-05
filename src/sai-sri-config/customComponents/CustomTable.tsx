import React, { memo, useState } from 'react'
import { FlatList, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Searchbar } from 'react-native-paper';
import { LabelLarge, SmallPara } from './CustomTextComponent'
const Item = ({ title, index }) => (
    <View style={[styles.itemContainer, index % 2 === 1 && { backgroundColor: EStyleSheet.value('$greySecondary') }]}>
        <View style={styles.itemContent}>
            <SmallPara>{title}</SmallPara>
        </View>
        <View style={styles.itemContent}>
            <SmallPara>{title}</SmallPara>
        </View>
        <View style={styles.itemContent}>
            <SmallPara>{title}</SmallPara>
        </View>
        <View style={styles.itemContent}>
            <SmallPara>{title}</SmallPara>
        </View>
    </View>
);
const CustomTablePrimary = ({ data, searchbar }) => {
    const [searchBar, setSearchBar] = useState<string>()
    const renderItem = (props) => {
        return (
            <Item title={props.item.title} index={props.index} />
        )
    }
    return (
        <View>
            {searchbar && <View style={styles.searchBarContainer}><Searchbar style={{ height: 40, backgroundColor: EStyleSheet.value('$greySecondary') }} value={searchBar} elevation={2} loading={false} onChangeText={(val) => setSearchBar(val)} /></View>}
            <View style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    <LabelLarge color="white">#</LabelLarge>
                </View>
                <View style={styles.headerContent}>
                    <LabelLarge color="white">#</LabelLarge>
                </View>
                <View style={styles.headerContent}>
                    <LabelLarge color="white">#</LabelLarge>
                </View>
                <View style={styles.headerContent}>
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

const styles = EStyleSheet.create({
    searchBarContainer: { marginVertical: 20, marginLeft: 'auto', minWidth: '70%', },
    itemContainer: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' },
    itemContent: { flex: 1, flexWrap: 'wrap', paddingHorizontal: 10, },
    headerContainer: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' },
    headerContent: { flex: 1, flexWrap: 'wrap', paddingHorizontal: 10, borderColor: '$grey', borderWidth: 1, backgroundColor: '$primary' }
})