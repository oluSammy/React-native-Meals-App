import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = ({
  onSelectMeal,
  title,
  duration,
  complexity,
  affordability,
  image,
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal} activeOpacity={0.91}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
              <Text numberOfLines={1} style={styles.title}>
                {title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{duration}</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "#FFFFFF",
    backgroundColor: "rgba(0, 0, 0, .5)",
    padding: 5,
    textAlign: "center",
  },
  mealItem: {
    height: 200,
    backgroundColor: "#f5f5f5",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    backgroundColor: "#ccc",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
});
