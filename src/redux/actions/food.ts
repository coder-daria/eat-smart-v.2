export const ADD_FOOD = "ADD_FOOD";
export const EDIT_FOOD = "EDIT_FOOD";

interface addFood {
  type: typeof ADD_FOOD
  content: any
}

interface editFood {
  type: typeof EDIT_FOOD
  content: any
}

export function addFood(food: any): addFood {
  return { type: ADD_FOOD, content: food };
}

export function editFood(food: any):editFood {
  return { type: EDIT_FOOD, content: food };
}
