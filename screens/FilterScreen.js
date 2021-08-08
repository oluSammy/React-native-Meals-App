import React, { useState } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderBtn from "../Components/HeaderButton";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Switch,
  Platform,
} from "react-native";
import Colors from "../constants/colors";

const FilterSwitch = ({ label, state, onChange }) => {
  const isAndroid = Platform.OS === "android";
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        value={state}
        onValueChange={onChange}
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={isAndroid ? Colors.primaryColor : "white"}
      />
    </View>
  );
};

const FilterScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const isAndroid = Platform.OS === "android";

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderBtn}>
          <Item
            title="save"
            iconName="ios-save-outline"
            onPress={() => console.log(isLactoseFree)}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, isGlutenFree, isLactoseFree, isVegetarian, isVegan]);
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Available Filter and restrictions</Text>
      <FilterSwitch
        label="Gluten Free"
        state={isGlutenFree}
        onChange={() => setIsGlutenFree(!isGlutenFree)}
      />
      <FilterSwitch
        label="Lactose Free"
        state={isLactoseFree}
        onChange={() => setIsLactoseFree(!isLactoseFree)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={() => setIsVegetarian(!isVegetarian)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={() => setIsVegan(!isVegan)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 20,
  },
});

export default FilterScreen;
