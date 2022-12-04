{/* <Text variant="displayLarge">Display Large</Text>
    <Text variant="displayMedium">Display Medium</Text>
    <Text variant="displaySmall">Display small</Text>

    <Text variant="headlineLarge">Headline Large</Text>
    <Text variant="headlineMedium">Headline Medium</Text>
    <Text variant="headlineSmall">Headline Small</Text>

    <Text variant="titleLarge">Title Large</Text>
    <Text variant="titleMedium">Title Medium</Text>
    <Text variant="titleSmall">Title Small</Text>

    <Text variant="bodyLarge">Body Large</Text>
    <Text variant="bodyMedium">Body Medium</Text>
    <Text variant="bodySmall">Body Small</Text>

    <Text variant="labelLarge">Label Large</Text>
    <Text variant="labelMedium">Label Medium</Text>
    <Text variant="labelSmall">Label Small</Text> */}

import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
const H1 = ({ children }) => <View style={{ paddingBottom: 10, paddingTop: 10 }}><Text variant="titleLarge">{children}</Text></View>
const LabelLarge = ({ children, color }: {
    children: string;
    color?: string;
}) => <View style={{ paddingBottom: 5, paddingTop: 5 }}><Text variant="labelLarge" style={{ color: color }}>{children}</Text></View>
const Para = ({ children }) => <View style={{ paddingBottom: 5, paddingTop: 5 }}><Text variant="bodyLarge">{children}</Text></View>
const SmallPara = ({ children }) => <View style={{ paddingBottom: 5, paddingTop: 5 }}><Text variant="bodySmall">{children}</Text></View>
export { H1, LabelLarge, Para, SmallPara }