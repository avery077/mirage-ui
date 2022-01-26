import React, { useEffect, useState } from 'react';
import { MaterialIcons } from 'doggie-react-ui';

import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function CheckBox({ style, textStyle, text = '', ...props}) {
    const [ selected, setSelected ] = useState(false);

    const pressHandler = () => {
        setSelected(current => !current)
      }
      useEffect( () => {
        console.log(selected);
    }, [selected]);

    return (
        <TouchableOpacity style={[styles.checkBox, style]} onPress={pressHandler}>
        <MaterialIcons
            size={30}
            color={"red"}
            name={ selected ? 'check-box' : 'check-box-outline-blank' }
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