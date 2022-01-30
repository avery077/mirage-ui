import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

function Button(props) {
    return (
        <Pressable 
            style={({ pressed }) => [
                {
                    boxShadow: pressed
                        ? "rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px"
                        : "rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px"
                },
                ,styles.btn ,props.style
            ]}
            onPress={props.onPress}
            >
            <Text style={styles.text}>{props.btnName}</Text>
        </Pressable>
    );
  }

  const styles = StyleSheet.create({
      btn:{
          backgroundColor: "#1976d2",
          borderColor: "#007bff",
          borderRadius: 5,
          border: "1px solid transparent",
          cursor: "pointer",
          padding: 10,
          minWidth: 100,
          textAlign: "center",
          width: "fit-content"
        },
      text:{
          color: "#fff",
          fontWeight: 400,
          letterSpacing: 0.5,
          fontSize: "small"
      }
  });
  
  export default Button;