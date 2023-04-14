import { ImageBackground, StyleSheet, Text, View, Image, FlatList, Platform, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CssStyle from "../../StyleSheet/CssStyle";
import { responsiveWidth as w, responsiveHeight as h } from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/Ionicons";
import { Line } from "../../component/Line";
import CustomButton from "../../component/CustomButton";
import DraggableFlatList, { NestableDraggableFlatList, NestableScrollContainer } from "react-native-draggable-flatlist";

const AllExercise = ({ navigation }) => {
  const dataItem = [{ item: 1 }, { item: 2 }, { item: 3 }, { item: 4 }, { item: 5 }, { item: 6 }, { item: 7 }];
  const [data1, setData1] = useState(dataItem);
  const renderItem = ({ item, index, drag, isActive }) => {
    return (
      <View style={[CssStyle.flexData, {}]}>
        <TouchableOpacity onLongPress={drag}>
          <Icon name="menu" size={23} color="#80808040" style={{ width: w(13) }} />
        </TouchableOpacity>
        <View>
          <View style={[CssStyle.flexRow, { width: w(74), marginVertical: h(3) }]}>
            <View style={{ width: w(23) }}>
              <Image source={require("../../assets/loading.gif")} resizeMode="contain" style={{ width: w(20), height: h(6) }} />
            </View>
            <View style={{}}>
              <Text style={styles.workOut}>ARM RAISES{item.item}</Text>
              <Text style={styles.workOutTiming}>00:30 </Text>
            </View>
          </View>

          <Line />
        </View>
      </View>
    );
  };
  return (
    <View style={CssStyle.mainContainer}>
      <ImageBackground source={require("../../assets/background.jpg")} style={{ width: "100%", height: h(30) }}>
        <View style={{ marginTop: h(15), paddingHorizontal: w(5) }}>
          <Icon name="arrow-back-outline" size={29} color="white" />
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 22, marginTop: h(3), marginLeft: w(3) }}>ARM BEGINNER</Text>
        </View>
      </ImageBackground>

      <View style={{ paddingHorizontal: w(4), flex: 1 }}>
        <View style={[CssStyle.flexData, { marginVertical: h(1) }]}>
          <View style={{ width: w(1), height: h(1), backgroundColor: "#022A90", marginRight: w(3) }} />
          <Text style={styles.timingText}>17 mins</Text>
          <View style={{ width: 5, height: 5, borderRadius: 8, backgroundColor: "red", marginHorizontal: w(1) }} />
          <Text style={styles.timingText}>19 workouts</Text>
        </View>

        <Line style={{ marginVertical: h(1), marginHorizontal: -w(4) }} />
        <NestableScrollContainer showsVerticalScrollIndicator={false}>
          <NestableDraggableFlatList data={data1} renderItem={renderItem} keyExtractor={(item, index) => `item-${index}`} onDragEnd={({ data }) => setData1(data)} />
        </NestableScrollContainer>
        <CustomButton paddingVertical={4} style={{ marginBottom: Platform.OS == "ios" ? h(1) : 0 }} buttonText={"START"} onPress={() => navigation.navigate("DetailOfExercise")} />
      </View>
    </View>
  );
};

export default AllExercise;

const styles = StyleSheet.create({
  timingText: {
    color: "red",
    fontWeight: "500",
    fontSize: 15,
  },
  workOut: {
    color: "black",
    fontWeight: "bold",
    marginBottom: h(0.9),
  },
  workOutTiming: {
    color: "#00000090",
    fontWeight: "500",
  },
});
