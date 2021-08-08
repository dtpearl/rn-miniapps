import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import StyledTouchableOpacity from "../components/StyledTouchableOpacity";

const HomeScreen = (props: { navigation: any }) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>Home Screen</Text>
      <StyledTouchableOpacity onPress={() => navigation.navigate("TextClock")}>
        <Text>Text Clock</Text>
      </StyledTouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
  },
});
