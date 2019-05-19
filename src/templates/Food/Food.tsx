import * as React from "react";

import Form from "../../components/Form";
import SearchFood from "../../components/Search";
import Selection from "../../components/Selection";

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
              <Selection isEditable={isEditable} onChange={this.changeOption} />
            </div>
            {isEditable && <div><SearchFood /></div>}
          </Options>
          <FormContainer>
            <ImgWrapper>
              <img height="100%" width="100%" src="https://minimalistbaker.com/wp-content/uploads/2018/04/DELICIOUS-Dragon-Fruit-Smoothie-Bowls-5-minutes-5-ingredients-1-blender-RICH-in-vitamins-and-minerals-vegan-glutenfree-smoothie-recipe-dragonfruit-12.jpg" />
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
