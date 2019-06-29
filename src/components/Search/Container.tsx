import { connect } from "react-redux";

import { searchFood } from "../../redux/actions/food";

import Search from "./Search";

//@todo Add proper types
const mapStateToProps = (state: any) => {
  return {
    searchedFood: state.food.searchedFood
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchFood: food => dispatch(searchFood(food))
  };
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(
  Search
);

export default SearchContainer;
