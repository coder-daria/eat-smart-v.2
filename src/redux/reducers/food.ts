import * as actions from "../actions/food";

const initialState = { 
  isSnackbarVisible: false,
  isFoodFound: false,
  list: {}, 
  searchedFood: "",
};

const foodReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.ADD_FOOD:
      return Object.assign({}, state, {
        isSnackbarVisible: !state.isSnackbarVisible,
        list: {
          ...state.list, 
          [action.content.name] : {...action.content},
        }
      });

    case actions.EDIT_FOOD:
      if(state.searchedFood !== action.content.name) {
        let newState = Object.assign({}, state, {
          isSnackbarVisible: !state.isSnackbarVisible,
          list: {
          ...state.list,
          [action.content.name] : {...action.content} 
          },
          searchedFood: ""
        });

        delete newState.list[state.searchedFood]

        return newState;
      }

      return Object.assign({}, state, {
        isSnackbarVisible: !state.isSnackbarVisible,
        list: { 
          ...state.list,
          [action.content.name] : {...action.content} 
        },
        searchedFood: "",
      });

    case actions.SEARCH_FOOD:
      const isSearchFoodInList = state.list[action.content];

      if(isSearchFoodInList) {
        return Object.assign({}, state, { 
          searchedFood: action.content,
          isFoodFound: true,
        });
      }
      
      return Object.assign({}, state, { 
        searchedFood: "",
        isSnackbarVisible: !state.isSnackbarVisible,
        isFoodFound: false,
      });
      
    default:
      return state;
  }
}

export default foodReducer;
