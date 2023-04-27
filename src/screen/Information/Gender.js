import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../../component/CustomButton";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import CssStyle from "../../StyleSheet/CssStyle";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors, ColorsApp } from "../../StyleSheet/Colors";
import Female from "../../assets/female.svg";

const Gender = ({ navigation }) => {
  const gender = [
    { item: "Male", icon: <Female width={30} fill="#000" height={30} /> },
    { item: "Female", icon: require("../../assets/male-gender.svg") },
  ];
  const [indexNumber, setIndex] = useState(-2);
  const [data, setData] = useState("");
  return (
    <View style={CssStyle.mainContainer}>
      <View style={{ paddingHorizontal: responsiveWidth(8), flex: 1 }}>
        <View style={{ flex: 3, paddingTop: responsiveHeight(20), alignItems: "center" }}>
          <Text style={{ fontSize: responsiveFontSize(3), color: "black", fontWeight: "bold", marginBottom: responsiveHeight(2), letterSpacing: 1 }}>How do you identify?</Text>
          <Text style={{ color: "#808080", letterSpacing: 0.5, fontSize: 12 }}>Lorem ipsum dolor nit emet, consectur sadipscing elitr Lorem ipsum dolor nit emet,</Text>
        </View>
        <View style={{ flex: 4 }}>
        {/* <Female width={30} fill="#000" height={30} /> */}
          {gender.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                setData(item.item), setIndex(index);
              }}
              key={index}
              style={[styles.buttonGender, { backgroundColor: index == indexNumber ? ColorsApp.normal : "#00000009" }]}
            >
              {/* <View>{item.icon}</View> */}
              <Text style={{ color: index == indexNumber ? "white" : "#808080", marginLeft: responsiveWidth(4) }}>{item.item} </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flex: 2 }}>
          <CustomButton onPress={() => (data ? navigation.navigate("Focused") : Alert.alert("Alert", "select gender"))} styleText={{ textTransform: "none" }} paddingVertical={5} buttonText={"Continue"} style={{ width: responsiveWidth(85), marginTop: responsiveHeight(2), zIndex: 999 }} />
        </View>
      </View>
    </View>
  );
};

export default Gender;

const styles = StyleSheet.create({
  buttonGender: {
    paddingVertical: responsiveHeight(2.3),
    paddingHorizontal: responsiveWidth(6),
    borderRadius: responsiveHeight(1),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: responsiveHeight(4),
  },
});
