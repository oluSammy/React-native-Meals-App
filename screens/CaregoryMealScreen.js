import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../Components/MealItem";
import MealList from "../Components/MealList";

const CategoryMealScreen = ({ navigation, route }) => {
  const { id } = route.params;

  React.useLayoutEffect(() => {
    const item = CATEGORIES.find((meal) => meal.id === id);
    navigation.setOptions({
      title: item.title,
    });
  }, []);

  const displayedMeal = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(id) >= 0
  );

  return <MealList listData={displayedMeal} navigation={navigation} />;
};

export default CategoryMealScreen;
