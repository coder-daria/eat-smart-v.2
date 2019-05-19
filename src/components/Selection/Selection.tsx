import * as React from "react";

import { 
  Container,
  Frame,
  Input,
  Label,
  Span,
} from "./styles";

const Selection: React.FC= () => {
  const [isEditable, makeEditable] = React.useState(false);

  return (
    <Container>
      <Frame isEditable={isEditable} />
      <Label>
        <Input checked={!isEditable} type="radio" onChange={() => makeEditable(false)} />
        <Span>Add</Span>
      </Label>
      <Label>
        <Input checked={isEditable} type="radio" onChange={() => makeEditable(true)}/>
        <Span>Edit</Span>
      </Label>
    </Container>
  );
}

export default Selection;
