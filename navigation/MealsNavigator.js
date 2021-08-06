import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CaregoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import Colors from "../constants/colors";

const Stack = createNativeStackNavigator();
const isAndroid = Platform.OS === "android";

const headerStyle = {
  backgroundColor: isAndroid ? Colors.primaryColor : "#FFFFFF",
};

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: headerStyle,
          headerTintColor: isAndroid ? "#FFFFFF" : Colors.primaryColor,
        }}
      >
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
