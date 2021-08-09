import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderBtn from "../Components/HeaderButton";
import { useSelector, useDispatch } from "react-redux";
import { toggleFaves } from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = ({ route, navigation }) => {
  const { meal } = route.params;
  const isFaved = useSelector((state) =>
    state.meals.favoriteMeals.some((item) => item.id === meal.id)
  );

  const dispatch = useDispatch();

  const toggleFaveHandler = () => {
    dispatch(toggleFaves(meal.id));
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderBtn}>
          <Item
            title="search"
            iconName={isFaved ? "ios-star" : "ios-star-outline"}
            onPress={toggleFaveHandler}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, isFaved]);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{meal.duration}</Text>
        <Text>{meal.complexity}</Text>
        <Text>{meal.affordability}</Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.titleText}>Ingredients</Text>
      </TouchableOpacity>
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
