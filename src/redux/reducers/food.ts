import * as actions from "../actions/food";

const initialState = { list: []};

export default function foodReducer(state = initialState, action: any) {
  switch (action.type) {
    case actions.ADD_FOOD:
      return Object.assign({}, state, { food: action.content });
    case actions.ADD_FOOD:
      return Object.assign({}, state, { food: [...state.list, ...action.content] });
    default:
      return state;
  }
}
