import React, { useState } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";

function DropdownList(props) {
    const [selectedValue, setSelectedValue] = useState("");

      

    return(
        <View style={styles.viewStyle}>
            <View style={{ flex: 0.7, fontSize: 14 }}>
                <Picker
                    itemStyle={styles.itemStyle}
                    mode="dropdown"
                    style={styles.pickerStyle}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        {props.listItem.map((item, index) => (
                            <Picker.Item
                                color="#0087F0"
                                label={item.name}
                                value={item.name}
                                index={index}
                                key={index}
                            />
                        ))}
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
      flex: 1,
      alignSelf: "center",
      flexDirection: "row",
      width: "92%",
      justifyContent: "space-between",
      alignItems: "center"
    },
    itemStyle: {
      fontSize: 10,
      fontFamily: "Roboto-Regular",
      color: "#007aff"
    },
    pickerStyle: {
      width: "100%",
      height: 40,
      color: "#007aff",
      fontSize: 14,
      fontFamily: "Roboto-Regular"
    },
    textStyle: {
      fontSize: 14,
      fontFamily: "Roboto-Regular"
    }
  });

export default DropdownList;