import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import Colors from "../constants/colors";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";

const FavoritesStack = createNativeStackNavigator();
const isAndroidOs = Platform.OS === "android";

const headerStyle = {
  backgroundColor: isAndroidOs ? Colors.primaryColor : "#FFFFFF",
};

const FavesNavigator = () => {
  return (
    <FavoritesStack.Navigator
      screenOptions={{
        headerStyle: headerStyle,
        headerTintColor: isAndroidOs ? "#FFFFFF" : "Colors.primaryColor",
      }}
    >
      <FavoritesStack.Screen name="Faves" component={FavouritesScreen} />
      <FavoritesStack.Screen name="MealDetail" component={MealDetailScreen} />
    </FavoritesStack.Navigator>
  );
};

export default FavesNavigator;
