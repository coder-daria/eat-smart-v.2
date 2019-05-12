import * as actions from "../actions/daily";

const initialState = { message: "Everything is okay!"};

export default function dailyReducer(state = initialState, action: any) {
  switch (action.type) {
    case actions.CHECK_DAILY:
      return Object.assign({}, state, { message: action.content });
    default:
      return state;
  }
}
