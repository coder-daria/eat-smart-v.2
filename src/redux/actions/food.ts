export const ADD_FOOD = "ADD_FOOD";

interface addFood {
  type: typeof ADD_FOOD
  content: any
}

export function addFood(food: any): addFood {
  return { type: ADD_FOOD, content: food };
}
