import * as React from "react";

import Form from "../../components/Form";
import SearchFood from "../../components/Search";

import { 
  Container,
  FoodContainer,
  FormContainer,
  FormWrapper,
  ImgWrapper,
  Options,
} from "./styles";

interface FoodStateProps {
  isEditable: boolean
}

class Food extends React.Component<{}, FoodStateProps> {
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

  render() {
    const { isEditable } = this.state;

    return (
      <Container>
        <FoodContainer>
          <Options>
            <div>
              <button onClick={this.changeOption}>ADD</button>
            </div>
            {isEditable && <div><SearchFood /></div>}
          </Options>
          <FormContainer>
            <ImgWrapper>
              <img height="100%" width="100%" src="http://lookingtocook.co.uk/wp-content/uploads/2016/08/Fresh-Local-Produce.jpg" />
            </ImgWrapper>
            <FormWrapper>
              <Form />
            </FormWrapper>
          </FormContainer>
        </FoodContainer>
      </Container>
    );
  }
}

export default Food;
