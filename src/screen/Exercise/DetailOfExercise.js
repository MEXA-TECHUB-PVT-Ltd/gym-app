import { Alert, Image, ImageBackground, Modal, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { responsiveWidth as w, responsiveHeight as h } from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import CssStyle from "../../StyleSheet/CssStyle";
import * as Progress from "react-native-progress";
import ProgressCircle from "react-native-progress-circle";
import CustomButton from "../../component/CustomButton";
import { WatchTime } from "../../component/Line";
const DetailOfExercise = ({ navigation }) => {
  const [time, setTime] = useState(10);
  const [indexNumber, setIndex] = useState("");
  const timerRef = useRef(time);
  const [openModel, setOpenModel] = useState(false);
  const [timeData, setTimeData] = useState("");
  useEffect(() => {
    const timerID = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerID);
        setTimeData("hello");
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);
  const countdownRef = useRef(null);
  const [resume, setResume] = useState("");

  const ButtonMap = [{ button: "RESTART THIS EXCHANGE" }, { button: "QUIT" }, { button: "RESUME" }];
  return (
    <View style={[CssStyle.mainContainer, { paddingTop: h(3) }]}>
      <View style={{ marginTop: Platform.OS == "ios" ? h(4) : h(1), flex: 1 }}>
        <ImageBackground source={require("../../assets/loading.gif")} style={{ width: "100%", height: h(50) }} resizeMode="contain">
          <View style={[CssStyle.flexData, { justifyContent: "flex-end", padding: w(3), flex: h(10) }]}>
            <TouchableOpacity style={styles.iconView}>
              <Icon name="videocam-outline" size={23} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconView}>
              <Icon name="volume-high-outline" size={23} color="white" />
            </TouchableOpacity>
          </View>

          <View style={[CssStyle.flexData, { justifyContent: "flex-end", padding: w(3), marginTop: h(30) }]}>
            <TouchableOpacity style={styles.iconView}>
              <AntDesign name="dislike2" size={23} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconView}>
              <AntDesign name="like2" size={23} color="white" />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {!timeData ? (
          <View style={{ alignItems: "center", flex: 1 }}>
            <Text style={styles.readyText}>Ready to go!</Text>

            <View style={[CssStyle.flexData, { marginTop: h(2) }]}>
              <Text style={styles.armText}>Arm raises</Text>
              <AntDesign size={17} name="questioncircleo" color="#00000020" />
            </View>
            <View style={[CssStyle.flexData, { flex: 1, alignItems: "center" }]}>
              <ProgressCircle percent={time * 10} radius={50} borderWidth={7} color="blue" shadowColor="#e9e9ef" bgColor="#fff">
                <Text style={{ fontSize: 30 }}>{time}</Text>
              </ProgressCircle>

              <TouchableOpacity
                style={{ paddingLeft: w(8) }}
                onPress={() => {
                   Alert.alert("why no data" + timeData);
                }}
              >
                <Icon name="chevron-forward-outline" size={30} color="blue" />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <WatchTime countdownRef={countdownRef} resume={resume} openModel={openModel} setOpenModel={setOpenModel} />
        )}
      </View>

      <Modal onRequestClose={() => setOpenModel(false)} visible={openModel} transparent={true} animationType="slide">
        <View style={[CssStyle.mainContainer, { backgroundColor: "#6495EDf1" }]}>
          <View style={{ marginTop: Platform.OS == "ios" ? h(6) : h(3), flex: 1, paddingHorizontal: w(4) }}>
            <TouchableOpacity style={{ flex: 1.3 }} onPress={() => setOpenModel(false)}>
              <Icon name="arrow-back-outline" size={23} color="white" style={{}} />
            </TouchableOpacity>

            <View style={[CssStyle.flexJustify, { flex: 1 }]}>
              <View>
                <Text style={[styles.armText, { color: "white" }]}>Pause</Text>
                <View style={[CssStyle.flexData, { marginTop: h(1) }]}>
                  <Text style={[styles.armText, { fontSize: 12, color: "#00000090" }]}>Arm raises</Text>
                  <AntDesign size={17} name="questioncircleo" color="#00000020" />
                </View>
              </View>

              <View style={{ backgroundColor: "white", width: w(14), height: h(7), justifyContent: "center", alignItems: "center", borderRadius: 7 }}>
                <Image source={require("../../assets/loading.gif")} resizeMode="contain" style={{ width: w(6), height: h(3) }} />
              </View>
            </View>
            <View style={{ marginTop: h(3), flex: 9 }}>
              {ButtonMap.map((item, index) => (
                <CustomButton
                  key={index}
                  onPress={() => {
                    setIndex(index),
                      item.button == "RESUME"
                        ? (countdownRef.current.resume(), setResume("Resume"), setOpenModel(false))
                        : item.button == "RESTART THIS EXCHANGE"
                        ? (setTimeData("newone"), setOpenModel(false), countdownRef.current.start())
                        : (navigation.navigate("Rest"), setOpenModel(false));
                  }}
                  style={{ marginVertical: h(1), alignItems: "flex-start" }}
                  borderRadius={6}
                  borderColor="white"
                  buttonText={item.button}
                  mode="outlined"
                  fontWeight={"bold"}
                  buttonColor={index == indexNumber ? "white" : ""}
                  paddingVertical={8}
                  colorText={index == indexNumber ? "blue" : "white"}
                />
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DetailOfExercise;

const styles = StyleSheet.create({
  iconView: {
    width: 40,
    height: 40,
    backgroundColor: "#00000030",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: h(10),
    marginRight: w(3),
  },
  readyText: {
    color: "blue",
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
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
});
