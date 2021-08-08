import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../Components/MealItem";

const MealList = ({ listData, navigation }) => {
  const RenderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate("MealDetail", {
            meal: itemData.item,
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={listData}
        renderItem={RenderMealItem}
        style={{ width: "100%" }}
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

export default MealList;
