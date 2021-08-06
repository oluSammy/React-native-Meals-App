import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const RenderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CategoryMeals", {
            id: itemData.item.id,
          });
        }}
        style={styles.gridItem}
      >
        <View>
          <Text>{itemData.item.title}</Text>
          <Text>HELLo</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={RenderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
