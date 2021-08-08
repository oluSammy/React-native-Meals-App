import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderBtn from "../Components/HeaderButton";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = ({ route, navigation }) => {
  const { meal } = route.params;

  // console.log(meal)

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
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{meal.duration}</Text>
        <Text>{meal.complexity}</Text>
        <Text>{meal.affordability}</Text>
      </View>
      <Text style={styles.titleText}>Ingredients</Text>
      {meal.ingredients.map((ing, idx) => (
        <ListItem>
          <Text key={idx}>{ing}</Text>
        </ListItem>
      ))}
      <Text style={styles.titleText}>Steps</Text>
      {meal.steps.map((step, idx) => (
        <ListItem>
          <Text key={idx}>{step}</Text>
        </ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  titleText: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
