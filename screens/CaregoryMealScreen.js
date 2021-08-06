import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMealScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => {
          navigation.navigate("MealDetail");
        }}
      />
    </View>
  );
};

// input1 = false
// input2 = false
// input3 = false

// function enableBtn () {
//     if (input1 === true && input2 === true && input3 === true) {
//         enableBtn.enable
//     }
// }

// input1.a

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
