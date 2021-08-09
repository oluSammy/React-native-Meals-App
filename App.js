import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import TabNavigation from "./navigation/index";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/reducers/meals";
import { Provider } from "react-redux";

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  if (!fontLoaded)
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log("error")}
      />
    );
  return (
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
}
