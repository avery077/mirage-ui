import React, { useEffect, useState } from 'react';
import { MaterialIcons } from 'doggie-react-ui';

import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function RadioButton({ selected, style, textStyle, text = '', color= 'black' , ...props}) {
    return (
        <TouchableOpacity style={[styles.radioButton, style]}>
            <Text style={textStyle}> {text} </Text>
            <MaterialIcons
                size={30}
                color={color}
                name={ selected ? 'radio-button-checked' : 'radio-button-unchecked' }
            />
        </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})


export default RadioButton;