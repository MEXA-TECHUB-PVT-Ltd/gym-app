import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CssStyle from "../../StyleSheet/CssStyle";
import CustomButton from "../../component/CustomButton";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/Ionicons";
import { ColorsApp } from "../../StyleSheet/Colors";

const Focused = ({ navigation }) => {
  const gender = [{ item: "Full Body" }, { item: "Arms" }, { item: "Abs" }, { item: "Butt" }, { item: "Legs" }];
  const [indexNumber, setIndex] = useState(-2);
  const [data, setData] = useState([]);
  const [desc, setDesc] = useState(false);
  // console.log(data);
  const ItemData = ({ item, index }) =>
    desc ? (
      <TouchableOpacity
        onPress={() => {
          data.push({ textData: item.item }), setDesc(false);
        }}
        style={[styles.buttonGender, { backgroundColor: ColorsApp.normal }]}
      >
        <Text style={{ color: "white" }}>{item.item} </Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={() => {
          data.splice(0, index), setDesc(true);
        }}
        style={[styles.buttonGender, { backgroundColor: "#00000009" }]}
      >
        <Text style={{ color: "#808080" }}>{item.item} </Text>
      </TouchableOpacity>
    );
  return (
    <View style={[CssStyle.mainContainer, { paddingTop: Platform.OS == "ios" ? 36 : 2 }]}>
      <View style={{ paddingHorizontal: responsiveWidth(8), flex: 1 }}>
        <View style={{ alignItems: "flex-end" }}>
          <CustomButton
            buttonText={"Skip"}
            buttonColor="white"
            colorText={"#FF6700"}
            borderColor="white"
            onPress={() => navigation.navigate("DashboardHome")}
            mode="outlined"
            styleText={{
              textTransform: "none",
            }}
          />
        </View>
        <View style={{ flex: 1, paddingTop: responsiveHeight(3), alignItems: "center" }}>
          <Text style={{ fontSize: responsiveFontSize(3), color: "black", fontWeight: "bold", marginBottom: responsiveHeight(2), letterSpacing: 1 }}>Focused Area</Text>
          <Text style={{ color: "#808080", letterSpacing: 0.5, fontSize: 12 }}>Lorem ipsum dolor nit emet, consectur sadipscing elitr Lorem ipsum dolor nit emet,</Text>
        </View>
        <View style={{ flex: 3.4 }}>
          {gender.map((item, index) => (
            <ItemData index={index} item={item} />
          ))}
        </View>
        <View style={{ flex: 0.9 }}>
          <CustomButton onPress={() => navigation.navigate("DashboardHome")} styleText={{ textTransform: "none" }} paddingVertical={5} buttonText={"Continue"} style={{ zIndex: 999, width: responsiveWidth(85), marginTop: responsiveHeight(2) }} />
        </View>
      </View>
    </View>
  );
};

export default Focused;

const styles = StyleSheet.create({
  buttonGender: {
    paddingVertical: responsiveHeight(2.6),
    paddingHorizontal: responsiveWidth(6),
    borderRadius: responsiveHeight(1),
    // flexDirection: "row",
    alignItems: "center",
    marginBottom: responsiveHeight(4),
  },
});
