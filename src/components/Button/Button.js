import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

function Button(props) {
    return (
        <Pressable style={[styles.btn, props.style]} onPress={props.onPress}>
            <Text style={styles.text}>{props.btnName}</Text>
        </Pressable>
    );
  }

  const styles = StyleSheet.create({
      btn:{
        fontSize: "medium",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        borderRadius: 5,
        border: "1px solid transparent",
        cursor: "pointer",
        padding: 10,
        minWidth: 100,
        textAlign: "center"
      },
      text:{
          color: "#fff"
      }
  });
  
  export default Button;