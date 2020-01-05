import * as actions from "../actions/food";

export const addFood = food => dispatch => {
  dispatch(actions.addFood(food)).then(
    setTimeout(() => {
      dispatch(actions.addFood(food))
    }, 1000)
  )
};

export const editFood = food => dispatch => {
  dispatch(actions.editFood(food)).then(
    setTimeout(() => {
      dispatch(actions.editFood(food))
    }, 1000)
  )
};

export const searchFood = food => dispatch => {
  dispatch(actions.searchFood(food)).then(
    setTimeout(() => {
      dispatch(actions.searchFood(food))
    }, 1000)
  )
};
