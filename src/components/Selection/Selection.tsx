import * as React from "react";

import { Container, Frame } from "./styles";

const Selection: React.FC= () => {
  const [isEditable, changeOption] = React.useState(false);

  return (
    <Container>
      <Frame isEditable={isEditable} />
      <button onClick={() => changeOption(false)}>Add</button>
      <button onClick={() => changeOption(true)}>Edit</button>
    </Container>
  );
}
export default Selection;
