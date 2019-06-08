import { connect } from "react-redux";

import { addFood } from "../../redux/actions/food";

import Form from "./Form";

//@todo Add proper types
const mapStateToProps = (state:any) => {
  return {
    list: state.food.list,
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    addFood: (food:any) => dispatch(addFood(food))
  }
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default FormContainer;
