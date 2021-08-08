import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const FilterScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>The Categories Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FilterScreen;
