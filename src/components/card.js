import React from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native"
import CheckBox from "@react-native-community/checkbox"
import { SIZES, FONTS, COLORS, SHADOW } from "../constants"

const styles = StyleSheet.create({
    view: {
        ...SHADOW,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.borderRadius,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        marginBottom: 15
    },
    text: {
        ...FONTS.h2_semiBold,
        color: COLORS.primary
    },
    checkbox: {
        marginRight: 15
    }
})

export default function Card(props) {

    
    return <Pressable style={styles.view} onLongPress={() => props.deleteItem(props.index)}>
        <CheckBox style={styles.checkbox}
            value={props.data.isSelected}
            onValueChange={(value) => props.setIsSelected(props.index, value)}
        />
        <Text style={{...styles.text, textDecorationLine: props.data.isSelected ? "line-through" : "none"}}>{props.data.text}</Text>
    </Pressable>
}