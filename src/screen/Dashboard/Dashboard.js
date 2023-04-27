import { FlatList, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ColorsApp } from "../../StyleSheet/Colors";
import CssStyle from "../../StyleSheet/CssStyle";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/Ionicons";
import CustomButton from "../../component/CustomButton";

const Dashboard = () => {
  const [indexNumber, setIndex] = useState("");
  const [data, setData] = useState("Beginner");
  const Card = [
    { desc: "Workout Days", iconName: "home", number: 23 },
    { desc: "Kcal", iconName: "home", number: 345 },
    { desc: "Minutes", iconName: "home", number: 60 },
  ];
  const Level = [{ text: "Beginner" }, { text: "Intermediate" }, { text: "Advance" }];
  const imageMap = [{ image: require("../../assets/gyms.jpg") }, { image: require("../../assets/gyms.jpg") }];
  const BeginnerData = [{ image: 1 }, { image: 1 }, { image: 1 }];

  const CustomCard = ({ workout }) =>
    BeginnerData.map((item, index) => (
      <View style={{ paddingBottom: responsiveHeight(1.7) }}>
        <View style={CssStyle.flexData}>
          <Image source={require("../../assets/gyms.jpg")} resizeMode="contain" style={{ width: responsiveWidth(19), height: responsiveHeight(9), borderRadius: 5 }} />
          
          <View style={{ marginLeft: responsiveWidth(5) }}>
            <Text style={{ color: "black", paddingBottom: responsiveHeight(0.7), fontWeight: "bold" }}>Abs Exercise</Text>
            <View style={CssStyle.flexJustify}>
              <Text style={{ color: ColorsApp.textColor }}>15 mins </Text>
              <View style={{ width: 1, height: responsiveHeight(2), backgroundColor: "black", marginHorizontal: responsiveWidth(4) }} />
              <Text style={{ color: ColorsApp.textColor }}>{workout} Workouts</Text>
            </View>
          </View>

        </View>
        <View style={{ borderBottomColor: ColorsApp.textColor, borderBottomWidth: 1, paddingTop: responsiveHeight(1.7), opacity: 0.2 }} />
      </View>
    ));
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ backgroundColor: ColorsApp.normal, width: 700, height: 700, position: "absolute", borderRadius: responsiveHeight(42), right: responsiveWidth(-47), top: responsiveHeight(-75) }} />
      <View style={{ paddingHorizontal: responsiveWidth(7), paddingTop: Platform.OS == "ios" ? 36 : responsiveHeight(2.8) }}>
        <View style={CssStyle.flexJustify}>
          <Text style={{ paddingBottom: responsiveHeight(0.7), color: "white", fontWeight: "bold" }}>Good Morning,</Text>
          <Icon name="clipboard" size={23} color="white" />
        </View>
        <Text style={{ color: "white", fontSize: 12 }}>{new Date().toLocaleDateString()}</Text>
        <View style={[CssStyle.flexJustify, { paddingHorizontal: responsiveHeight(1), paddingTop: responsiveHeight(5.7) }]}>
          {Card.map((item, index) => (
            <View key={index} style={[CssStyle.shadow, { alignItems: "center", backgroundColor: "white", width: responsiveWidth(25), borderRadius: responsiveWidth(1.6), paddingVertical: responsiveHeight(1.5) }]}>
              <Icon name={item.iconName} size={23} color="red" />
              <Text style={{ fontWeight: "bold", paddingVertical: responsiveHeight(0.6) }}>{item.number}</Text>
              <Text style={{ fontSize: responsiveFontSize(1.5) }}>{item.desc}</Text>
            </View>
          ))}
        </View>

        <View style={{ backgroundColor: "#EEEEEE", borderRadius: responsiveHeight(1), paddingHorizontal: responsiveWidth(3), paddingVertical: responsiveHeight(1.8), marginTop: responsiveHeight(3.4) }}>
          <Text style={{ color: "black", fontWeight: "500" }}>Weekly Goal</Text>
          <Text style={{ textAlign: "center", color: "black", fontSize: 12, paddingVertical: responsiveHeight(1.7) }}>Lorem ipsum dolor sit amet, cons</Text>
          <View style={{}}>
            <CustomButton onPress={() => {}} styleText={{ textTransform: "none", fontSize: 12, fontWeight: "400" }} paddingVertical={0} buttonText={"Add Goal"} style={[CssStyle.shadow, { width: responsiveWidth(50), zIndex: 999, alignSelf: "center" }]} />
          </View>
        </View>
        <Text style={{ color: ColorsApp.normal, fontSize: 16, fontWeight: "600", paddingVertical: responsiveHeight(3) }}>7x4 Challenge</Text>
        <View style={[CssStyle.flexJustify, { paddingBottom: responsiveHeight(5) }]}>
          {imageMap.map((item, index) => (
            <Image source={item.image} style={{ width: responsiveWidth(40), height: responsiveHeight(19), borderRadius: responsiveHeight(1.4) }} />
          ))}
        </View>
        <View style={{ marginHorizontal: responsiveWidth(-7) }}>
          <FlatList
            data={Level}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={[styles.buttonStyle, { backgroundColor: index == indexNumber ? ColorsApp.normal : "#eeeeee", marginLeft: index == 0 ? responsiveWidth(8) : 0 }]}
                onPress={() => {
                  setIndex(index), setData(item.text);
                }}
              >
                <Text style={{ color: index == indexNumber ? "white" : "black" }}>{item.text}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{ paddingVertical: responsiveHeight(3) }}>{data == "Beginner" ? <CustomCard workout={8} /> : data == "Intermediate" ? <CustomCard workout={28} /> : <CustomCard workout={48} />}</View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  buttonStyle: { paddingVertical: responsiveHeight(1), paddingHorizontal: responsiveWidth(7), backgroundColor: "#EEEEEE", marginHorizontal: responsiveWidth(4), borderRadius: responsiveWidth(1) },
});
