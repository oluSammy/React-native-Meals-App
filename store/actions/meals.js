export const TOGGLE_FAVES = "TOGGLE_FAVES";
export const SET_FILTER = "SET_FILTER";

export const toggleFaves = (id) => {
  return {
    type: TOGGLE_FAVES,
    mealId: id,
  };
};

export const setFilters = (settings) => {
  return { type: SET_FILTER, filters: settings };
};
