import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MealsNavigator from "./MealsNavigator";
import FavouritesScreen from "../screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FilterScreen from "../screens/FilterScreen";

import HomeNavigator from "./HomeNavigator";

const Drawer = createDrawerNavigator();

const drawerOptions = {
  drawerActiveTintColor: Colors.accentColor,
};

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{ ...{ headerShown: false }, ...drawerOptions }}
        />
        <Drawer.Screen
          name="mealFaves"
          component={FavouritesScreen}
          options={{
            ...{
              drawerLabel: "Favourites",
            },
            ...drawerOptions,
          }}
        />
        <Drawer.Screen
          name="filters"
          component={FilterScreen}
          options={drawerOptions}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
