import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import MealList from "../Components/MealList";
import { useSelector } from "react-redux";

const FavouritesScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {favMeals.length > 0 ? (
        <MealList listData={favMeals} navigation={navigation} />
      ) : (
        <View style={styles.screen}>
          <Text style={styles.txt}>Meals you like will appear here</Text>
        </View>
      )}
    </SafeAreaView>
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

export default FavouritesScreen;
