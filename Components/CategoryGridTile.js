import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridTile = ({ title, onSelect, color }) => {
  const isAndroid = Platform.OS === "android";

  const TouchableComponent =
    isAndroid && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;
  return (
    <View style={styles.gridItem}>
      <TouchableComponent onPress={onSelect} style={{ flex: 1 }}>
        <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  text: {
    // color: "#FFFFFF",
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "right",
  },
});

export default CategoryGridTile;
