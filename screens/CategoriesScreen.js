import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../Components/CategoryGridTile";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderBtn from "../Components/HeaderButton";

const CategoriesScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderBtn}>
          <Item
            title="search"
            iconName="ios-menu-outline"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const RenderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate("CategoryMeals", {
            id: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <View>
      <FlatList data={CATEGORIES} renderItem={RenderGridItem} numColumns={2} />
    </View>
  );
};

export default CategoriesScreen;
