import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import MealList from "../Components/MealList";
import { MEALS } from "../data/dummy-data";

const FavouritesScreen = ({ navigation }) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MealList listData={favMeals} navigation={navigation} />
    </SafeAreaView>
  );
};

export default FavouritesScreen;
