import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";

const NewPage = () => {
  const countInterval = useRef(null);
  const [count, setCount] = useState(0);
  const loaderValue = useRef(new Animated.Value(0)).current;
  const load = (count) => {
    Animated.timing(loaderValue, {
      toValue: count, //final value
      duration: 500, //update value in 500 milliseconds
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    load(count);
    if (count >= 100) {
      setCount(100);
      clearInterval(countInterval);
    }
  }, [count]);
  useEffect(() => {
    countInterval.current = setInterval(() => setCount((old) => old + 5), 1000);
    return () => {
      clearInterval(countInterval); //when user exits, clear this interval.
    };
  }, []);
  const width = loaderValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp",
  });
  return (
    <View style={styles.container}>
      <Text>Loading.....</Text>
      <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: "#8BED4F", width }]} />
      </View>
      {/* <Text>{`${progress}%`}</Text> */}
    </View>
  );
};
export default NewPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", //column direction
    justifyContent: "center",
    alignItems: "center",
    paddingTop: responsiveHeight(10),
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  progressBar: {
    height: 20,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
  },
});
