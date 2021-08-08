import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderBtn from "../Components/HeaderButton";

const MealDetailScreen = ({ route, navigation }) => {
  const { meal } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderBtn}>
          <Item
            title="search"
            iconName="ios-star"
            onPress={() => console.log("Mark as Fave")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen</Text>
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

export default MealDetailScreen;
