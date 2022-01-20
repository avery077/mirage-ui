import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function CheckBox({ selected, onPress, style, textStyle, text = '', ...props}) {
    return (
        <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress} {...props}>
        <Icon
            size={30}
            color={"red"}
            name={ selected ? 'check-box' : 'check-box-outline-blank'}
        />
        <Text style={textStyle}> {text} </Text>
        </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})


export default CheckBox;