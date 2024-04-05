import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const UnderLine = ({ value, color }) => {
    return (
        <TextInput style={{ borderBottomColor: color, borderBottomWidth: 1, fontSize: 16, color }} editable={false}
            value={value || ''}/>
    )
}

export default UnderLine
