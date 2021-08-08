import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "../screens/FavouritesScreen";
import FilterScreen from "../screens/FilterScreen";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MealsFaves" component={FavouritesScreen} />
      <Drawer.Screen name="Filter" component={FilterScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
