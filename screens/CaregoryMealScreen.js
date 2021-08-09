import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../Components/MealList";
import { useSelector } from "react-redux";
import { Text, View, StyleSheet } from "react-native";

const CategoryMealScreen = ({ navigation, route }) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const { id } = route.params;

  React.useLayoutEffect(() => {
    const item = CATEGORIES.find((meal) => meal.id === id);
    navigation.setOptions({
      title: item.title,
    });
  }, []);

  const displayedMeal = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(id) >= 0
  );

  return (
    <>
      {displayedMeal.length === 0 ? (
        <View style={styles.screen}>
          <Text style={styles.txt}>No meals found, check your filters</Text>
        </View>
      ) : (
        <MealList listData={displayedMeal} navigation={navigation} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 20,
    fontFamily: "open-sans",
  },
});

export default CategoryMealScreen;
