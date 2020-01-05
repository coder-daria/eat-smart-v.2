import { connect } from "react-redux";

import { addFood, editFood } from "../../redux/asyncActions/food";

import Form from "./Form";

//@todo Add proper types
const mapStateToProps = (state:any) => {
  return {
    list: state.food.list,
    searchedFood: state.food.searchedFood,
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    addFood: (food:any) => dispatch(addFood(food)),
    editFood: (food:any) => dispatch(editFood(food)),
  }
}

const sFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default FormContainer;
