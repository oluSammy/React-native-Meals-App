import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MealsNavigator from "./MealsNavigator";
import FavouritesScreen from "../screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";
import { Platform } from "react-native";
import FavesNavigator from "./FavesNavigator";
import MyDrawer from "./DrawerNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FilterScreen from "../screens/FilterScreen";

const Tab = createBottomTabNavigator();
const MaterialTab = createMaterialBottomTabNavigator();

const TAB_ICON = {
  Meals: "ios-restaurant",
  Favourites: "ios-star",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
  };
};

const HomeNavigator = () => {
  return (
    <>
      {Platform.OS === "android" ? (
        <MaterialTab.Navigator
          activeColor="#FFFFFF"
          barStyle={{ backgroundColor: Colors.primaryColor }}
        >
          <MaterialTab.Screen
            name="Meals"
            component={MealsNavigator}
            options={{
              tabBarLabel: "Meals",
              tabBarIcon: ({ color = "white" }) => (
                <Ionicons name="ios-restaurant" color={color} size={20} />
              ),
            }}
          />
          <MaterialTab.Screen
            name="Feed"
            component={FavouritesScreen}
            options={{
              tabBarLabel: "Favourites",
              tabBarIcon: ({ color }) => (
                <Ionicons name="ios-star" color={color} size={20} />
              ),
            }}
          />
        </MaterialTab.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: Colors.accentColor,
            inactiveTintColor: "grey",
          }}
        >
          <Tab.Screen name="Meals" component={MealsNavigator} />
          <Tab.Screen name="Favourites" component={FavesNavigator} />
        </Tab.Navigator>
      )}
    </>
  );
};

export default HomeNavigator;
