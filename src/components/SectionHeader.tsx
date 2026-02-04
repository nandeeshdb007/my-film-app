import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'

const SectionHeader = ({ title }: { title: string }) => {
    return (
        <View style={styles.header}>
            <Text style={{ color: COLORS.text, fontWeight: "600", fontSize: 16 }}>{title}</Text>
        </View>
    )
}

export default SectionHeader

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 14,
        paddingHorizontal: 14,
    }
})
