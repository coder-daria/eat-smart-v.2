import * as React from "react";

import { 
  Container,
  Frame,
  Input,
  Label,
  Span,
} from "./styles";

interface SelectionProps {
  isEditable: boolean;
  onChange: () => void;
};

const Selection: React.FC<SelectionProps> = ({ isEditable, onChange }) => (
  <Container>
    <Frame isEditable={isEditable} />
    <Label>
      <Input checked={!isEditable} type="radio" onChange={onChange} />
      <Span>Add</Span>
    </Label>
    <Label>
      <Input checked={isEditable} type="radio" onChange={onChange}/>
      <Span>Edit</Span>
    </Label>
  </Container>
);

export default Selection;
