import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealScreen = ({ navigation, route }) => {
  const { id } = route.params;

  React.useLayoutEffect(() => {
    const item = CATEGORIES.find((meal) => meal.id === id);
    navigation.setOptions({
      title: item.title,
    });

  }, []);


  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen {id}</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => {
          navigation.navigate("MealDetail");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
