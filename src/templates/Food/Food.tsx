import * as React from "react";
import { connect } from "react-redux";

import Form from "../../components/Form";
import SearchFood from "../../components/Search";
import Selection from "../../components/Selection";
import Snackbar from "../../components/Snackbar";

import { 
  Container,
  FormContainer,
  FormWrapper,
  ImgWrapper,
  Options,
  PageContent,
} from "./styles";

interface FoodState {
  isEditable: boolean;
}

interface FoodProps {
  isSnackbarVisible: boolean;
  isFoodFound: boolean;
}

//todo add state types
const mapStateToProps = (state:any) => {
  return {
    isSnackbarVisible: state.food.isSnackbarVisible,
    isFoodFound: state.food.isFoodFound,
  }
}

class Food extends React.Component<FoodProps, FoodState> {
  constructor(props){
    super(props);
    this.state = {
      isEditable: false,
    };
  };

  changeOption = () => {
    this.setState(prevState => {
      return {
        isEditable: !prevState.isEditable
      };
    });
  };

  snackbarMessage = () => {
    const { isEditable } = this.state;
    const { isFoodFound } = this.props;
    let message = "";

    if(isEditable) {
      message = isFoodFound ?  "Food successfully edited" : "Food has not been found";
    } else {
      message = "Food successfully added";
    }

    return message;
  }
  render() {
    const { isEditable } = this.state;
    const { isSnackbarVisible, isFoodFound } = this.props;
    const isError = isEditable && !isFoodFound;
  
    return (
      <PageContent>
        <Container>
          <Options>
            <div>
              <Selection isEditable={isEditable} onChange={this.changeOption} />
            </div>
            {isEditable && <div><SearchFood /></div>}
          </Options>
          <FormContainer>
            <ImgWrapper>
              <img height="100%" width="100%" src="https://minimalistbaker.com/wp-content/uploads/2018/04/DELICIOUS-Dragon-Fruit-Smoothie-Bowls-5-minutes-5-ingredients-1-blender-RICH-in-vitamins-and-minerals-vegan-glutenfree-smoothie-recipe-dragonfruit-12.jpg" />
            </ImgWrapper>
            <FormWrapper>
              <Form isEditable={isEditable} />
            </FormWrapper>
          </FormContainer>
        </Container>
        {
          isSnackbarVisible && (
            <Snackbar 
            color={isError ? "error" : "success"} 
            shade="default" 
            iconSize={18}
            iconName={isError ? "cancelCircle" : "checkmark"}
            >
              {this.snackbarMessage()}
            </Snackbar>
          )
        }
      </PageContent>
    );
  }
}

const FoodContainer = connect(
  mapStateToProps,
  null,
)(Food);

export default FoodContainer;
