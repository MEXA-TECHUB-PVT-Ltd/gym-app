import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import CssStyle from "../../StyleSheet/CssStyle";
import AntDesign from "react-native-vector-icons/AntDesign";
import { responsiveWidth as w, responsiveHeight as h } from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/Ionicons";
import CustomButton from "../../component/CustomButton";

const Rest = ({ navigation }) => {
  const [timeArm, setTimeArm] = useState(7);
  const timerArmRef = useRef(timeArm);
  const [indexNumber, setIndex] = useState("");

  useEffect(() => {
    const timerID = setInterval(() => {
      timerArmRef.current -= 1;
      if (timerArmRef.current < 0) {
        clearInterval(timerID);
      } else {
        setTimeArm(timerArmRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const dataItem = [{ item: "+20s" }, { item: "Skip" }];

  return (
    <View style={{ flex: 1 }}>
      <View style={[{ backgroundColor: "blue", flex: 2, justifyContent: "center", alignItems: "center" }]}>
        <Text style={[styles.armText]}>Rest</Text>
        <Text style={[styles.watchTime, { color: "white" }]}>00:0{timeArm}</Text>

        <View style={[CssStyle.flexJustify, { marginTop: h(2) }]}>
          {dataItem.map((item, index) => (
            <CustomButton
              key={index}
              onPress={() => setIndex(index)}
              style={{ marginHorizontal: h(1), alignItems: "flex-start", paddingHorizontal: w(3) }}
              buttonText={item.item}
              mode="outlined"
              fontWeight={"bold"}
              buttonColor={index == indexNumber ? "white" : "#00000030"}
              colorText={index == indexNumber ? "blue" : "white"}
              paddingVertical={0}
            />
          ))}
        </View>
      </View>

      <View style={[{ backgroundColor: "blue", flex: 1 }]}>
        <View style={{ paddingHorizontal: w(4) }}>
          <Text style={{ color: "white", fontWeight: "500" }}>NEXT 2/19</Text>

          <View style={CssStyle.flexJustify}>
            <View style={[CssStyle.flexData, {}]}>
              <Text style={[styles.armText, { fontSize: 17 }]}>side arm raise</Text>
              <AntDesign size={17} name="questioncircleo" color="#00000020" />
            </View>

            <Text style={[styles.armText, { fontSize: 17 }]}>00:30</Text>
          </View>
        </View>

        <View style={{ backgroundColor: "white", borderTopRightRadius: w(7), borderTopLeftRadius: w(7), marginTop: h(1) }}>
          <Image resizeMode="contain" source={require("../../assets/loading.gif")} style={{ width: "100%", height: h(30) }} />
        </View>
      </View>
    </View>
  );
};

export default Rest;

const styles = StyleSheet.create({
  armText: {
    color: "white",
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
