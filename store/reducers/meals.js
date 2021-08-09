import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVES, SET_FILTER } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
  num: 0,
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVES:
      const meal = state.meals.find((el) => el.id === action.mealId);

      const isFaved = state.favoriteMeals.findIndex(
        (item) => item.id === action.mealId
      );

      if (isFaved === -1) {
        return { ...state, favoriteMeals: [...state.favoriteMeals, meal] };
      } else {
        const copiedMeals = [...state.favoriteMeals];
        copiedMeals.splice(isFaved, 1);
        return { ...state, favoriteMeals: copiedMeals };
      }

    case SET_FILTER:
      const appliedFilters = action.filters;
      const newFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }

        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }

        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }

        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }

        return true;
      });

      return { ...state, filteredMeals: newFilteredMeals };

    default:
      return state;
  }
};

export default mealsReducer;
