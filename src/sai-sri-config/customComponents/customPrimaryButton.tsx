/* eslint-disable prettier/prettier */
import React from 'react';
import { memo } from 'react';
import { Pressable, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button } from 'react-native-paper';

const CustomPrimaryButton = (props: any) => {
    const { name, ...rest } = props;
    return (
        <View style={{ padding: 10 }}>
            <Button mode="contained" {...rest} buttonColor={EStyleSheet.value('$primary')}>
                {name}
            </Button>
        </View>
    );
};

{/* <Pressable android_ripple={{ color: '#ddd' }}> </Pressable> this is for android */ }
{/* <Pressable style={({pressed})=> pressed && {backgroundColor: '#ddd', opacity: 0.5}}></Pressable> this is for ios */ }
export default memo(CustomPrimaryButton);
