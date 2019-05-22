import { connect } from "react-redux";

import { searchFood } from "../../redux/actions/food";

import Search from "./Search";

const mapStateToProps = state => {
  return {
    searchedFood: state.searchedFood
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
