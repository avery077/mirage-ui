import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Animated } from 'react-native';

const Message = (props) => {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(()=>{
        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.delay(2000),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start(() => {
            props.onHide();
        });
    }, []);

    return(
        <Animated.View
            style={{
                opacity,
                transform: [
                    {
                        translateY: opacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-20, 0],
                        }),
                    },   
                ],
                margin: 10,
                marginBottom: 5,
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 4,
                shadowColor: 'black',
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.15,
                shadowRadius: 5,
                elevation: 6,
            }}
        >
            <Text>{props.message}</Text>   
        </Animated.View>
    );
}

function Button(props) {
    const [ ToastMessage, setToastMessage] = useState([]);

    return (
        <>
        <View 
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 45,
            }}>
                {ToastMessage?.map((ToastMessage, index) =>(
                    <Message
                    key={index}
                    message={ToastMessage}
                    onHide={() => {
                        setToastMessage((messages) => messages.filter( (currentMessage) => currentMessage !== ToastMessage ));
                      }}
                    />
                ))}
        </View>

        <Pressable 
            style={({ pressed }) => [
                {
                    boxShadow: pressed
                        ? "rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px"
                        : "rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px"
                },
                ,styles.btn ,props.style
            ]}
            onPressIn={ 
                props.ToastMessage ?() => {
                    const message = props.ToastMessage;
                    setToastMessage([...ToastMessage, message]);
                } : null
            }
            onPress={props.onPress}
            >
            <Text style={styles.text}>{props.btnName}</Text>
        </Pressable>
        </>
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
    },
    animatedView:{
        
    }
});
  
export default Button;