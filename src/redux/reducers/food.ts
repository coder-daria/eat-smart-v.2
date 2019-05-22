import * as actions from "../actions/food";

const initialState = { list: {}, searchedFood: ""};

const foodReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.ADD_FOOD:
      return Object.assign({}, state, { 
        list: {
          ...state.list, 
          [action.content.name] : {...action.content},
        }
      });
    case actions.EDIT_FOOD:
      return Object.assign({}, state, { list: { [action.content.name] : {...action.content} }});
    case actions.SEARCH_FOOD:
      return Object.assign({}, state, { searchFood: action.content });
    default:
      return state;
  }
}

export default foodReducer;
