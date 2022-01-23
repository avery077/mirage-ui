import React from 'react';
import { Linking, Text, StyleSheet } from 'react-native';

function Link(props){
    return(
        <Text style={styles.link} onPress={() => Linking.openURL(props.url) } >
            {props.url}
        </Text>
    );
}

const styles = StyleSheet.create({
    link:{
        color: "blue",
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
    }
});

export default Link;