import React, { useEffect } from "react";
import { View, Text, StyleSheet, Alert, Platform, ImageBackground } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import CustomButton from "../component/CustomButton";
import CssStyle from "../StyleSheet/CssStyle";

const StartUp = ({ navigation }) => {
  return (
    <ImageBackground source={require("../assets/gyms.jpg")} style={[CssStyle.mainContainer, { paddingTop: Platform.OS == "ios" ? 36 : 2 }]}>
      <View style={[CssStyle.flexEnd, { paddingBottom: responsiveHeight(7), width: responsiveWidth(78), alignSelf: "center" }]}>
        <Text style={styles.headerText}>Healthy anytime and anywhere</Text>
        <Text style={styles.infoText}>Lorem ipsum dolor sit amet, consectular sadipscing elitr, sed diam nonumy eirmed</Text>

        <CustomButton onPress={() => navigation.navigate("Gender")} styleText={{ textTransform: "none" }} paddingVertical={5} buttonText={"Lets start"} style={{ width: responsiveWidth(85), marginTop: responsiveHeight(2.6) }} />
      </View>
    </ImageBackground>
  );
};

export default StartUp;

const styles = StyleSheet.create({
  headerText: {
    color: "white",
    fontSize: responsiveFontSize(3.7),
    textAlign: "center",
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(2.3),
    // fontFamily: "Roboto-Regular",
  },
  infoText: {
    color: "white",
    fontWeight: "400",
    letterSpacing: 1,
    fontSize: 13,
  },
});
