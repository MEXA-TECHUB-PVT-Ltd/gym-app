import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { responsiveWidth as w, responsiveHeight as h } from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import CustomButton from "./CustomButton";
import CssStyle from "../StyleSheet/CssStyle";
import { useNavigation } from "@react-navigation/native";
import { Countdown } from "react-native-element-timer";

export const Line = ({ style }) => <View style={[style, { borderBottomWidth: 1, borderBottomColor: "#DBCFB0" }]} />;

export const WatchTime = ({ openModel, setOpenModel, resume, countdownRef }) => {
  const [start, setStart] = useState(resume);
  const navigation = useNavigation();
  const [timeArm, setTimeArm] = useState(30);
  useEffect(() => {
    // const timerID = setInterval(() => {
    //   timerArmRef.current -= 1;
    //   if (timerArmRef.current < 0) {
    //     clearInterval(timerID);
    //     // navigation.navigate("Rest");
    //   } else {
    //     setTimeArm(timerArmRef.current);
    //   }
    // }, 1000);
    // return () => {
    //   clearInterval(timerID);
    // };
    countdownRef.current.start();
  }, []);
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <View style={[CssStyle.flexData, { marginTop: h(2), flex: 1 }]}>
        <Text style={[styles.armText, { fontSize: 25 }]}>Arm raises</Text>
        <AntDesign size={17} name="questioncircleo" color="#00000020" />
      </View>

      <View style={[CssStyle.flexData, { flex: 1 }]}>
        <Text style={styles.watchTime}>00:{<Countdown ref={countdownRef} style={styles.timer} textStyle={styles.watchTime} initialSeconds={30} onTimes={(e) => {}} onPause={(e) => {}} onEnd={(e) => navigation.navigate("Rest")} />}</Text>
      </View>

      <View style={[{ flex: 1 }]}>
        {start == "Resume" ? (
          <CustomButton
            onPress={() => {
              countdownRef.current.resume(), setStart(""), setOpenModel(true),Alert.alert('REsume function')
            }}
            buttonText={"RESUME"}
            iconName="play-outline"
            style={{ width: w(50) }}
            fontWeight="bold"
            paddingVertical={3}
            iconColor="white"
          />
        ) : (
          <CustomButton
            onPress={() => {
              countdownRef.current.pause(), setStart("Resume"), setOpenModel(true),Alert.alert('pause function')
            }}
            buttonText={"PAUSE"}
            iconName="pause"
            style={{ width: w(50) }}
            fontWeight="bold"
            paddingVertical={3}
            iconColor="white"
          />
        )}
      </View>

      <View style={[CssStyle.flexJustify, { flex: 1, width: w(80) }]}>
        <CustomButton
          buttonColor={"white"}
          onPress={() => {
            navigation.goBack();
          }}
          colorText="black"
          fontWeight={"bold"}
          iconColor="#00000040"
          buttonText={"Previous"}
          iconName="play-skip-back-circle-outline"
          mode="text"
        />
        <CustomButton
          buttonColor={"white"}
          colorText="black"
          fontWeight={"bold"}
          iconColor="#00000040"
          buttonText={"Skip"}
          iconName="play-skip-forward-circle-outline"
          onPress={() => {
            navigation.navigate("Rest"), setTimeArm(0);
          }}
          mode="text"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  armText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    marginRight: w(2),
    textTransform: "uppercase",
  },
  watchTime: {
    color: "black",
    fontSize: w(12),
    fontWeight: "bold",
  },
  timer: {
    marginVertical: 10,
  },
});
