export const ADD_FOOD = "ADD_FOOD";
export const EDIT_FOOD = "EDIT_FOOD";
export const SEARCH_FOOD = "SEARCH_FOOD";

interface addFood {
  content: any;
  type: typeof ADD_FOOD;
}

interface editFood {
  content: any;
  type: typeof EDIT_FOOD;
}

interface searchFood {
  content: string;
  type: typeof SEARCH_FOOD;
}

export function addFood(food: any): addFood {
  return { type: ADD_FOOD, content: food };
}

export function editFood(food: any):editFood {
  return { type: EDIT_FOOD, content: food };
}

export function searchFood(food: string):searchFood {
  return { type: SEARCH_FOOD, content: food };
}
