export const CHECK_DAILY = "CHECK_DAILY";
export const EDIT_FOOD = "EDIT_FOOD";

interface checkDaily {
  type: typeof CHECK_DAILY
  content: string
}

interface editFood {
  type: typeof EDIT_FOOD
  content: any
}

export function checkDaily(message: string):checkDaily {
  return { type: CHECK_DAILY, content: message };
}

export function editFood(food: any):editFood {
  return { type: EDIT_FOOD, content: food };
}
