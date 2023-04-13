import { ImageBackground, StyleSheet, Text, View, Image, FlatList, Platform } from "react-native";
import React from "react";
import CssStyle from "../../StyleSheet/CssStyle";
import { responsiveWidth as w, responsiveHeight as h } from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/Ionicons";
import { Line } from "../../component/Line";
import CustomButton from "../../component/CustomButton";

const AllExercise = ({ navigation }) => {
  const dataItem = [{ item: 1 }, { item: 2 }, { item: 3 }, { item: 2 }, { item: 3 }, { item: 2 }, { item: 3 }];
  return (
    <View style={CssStyle.mainContainer}>
      <ImageBackground source={require("../../assets/background.jpg")} style={{ width: "100%", height: h(30) }}>
        <View style={{ marginTop: h(15) }}>
          <Icon name="arrow-back-outline" size={29} color="white" />
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 22, marginTop: h(3) }}>ARM BEGINNER</Text>
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
        <FlatList
          data={dataItem}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={CssStyle.flexData}>
              <Icon name="menu" size={23} color="#80808040" style={{ width: w(13) }} />
              <View>
                <View style={[CssStyle.flexRow, { width: w(74), marginVertical: h(3) }]}>
                  <View style={{ width: w(18) }}>
                    <Image source={require("../../assets/loading.gif")} resizeMode="contain" style={{ width: w(10), height: h(4) }} />
                  </View>
                  <View style={{}}>
                    <Text style={styles.workOut}>ARM RAISES</Text>
                    <Text style={styles.workOutTiming}>00:30 </Text>
                  </View>
                </View>
                <Line />
              </View>
            </View>
          )}
        />
        
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
  },
  workOutTiming: {
    color: "blue",
  },
});
