import * as React from "react";

import { 
  CancelIcon, 
  Container, 
  SearchIcon, 
  StyledInput,
} from "./styles";

interface SearchProps {
  searchedFood: string;
  searchFood: (food: string) => void
}

const Search: React.FC<SearchProps> = (props) => {
  const [value, setValue] = React.useState("");

  const clearValue = (): void => setValue("");

  const search = (): void => {
    const { searchFood } = props;

    searchFood(value);
    clearValue();
  }

  return (
    <Container>
      <StyledInput value={value} onChange={(e) => setValue(e.target.value)} />
      <CancelIcon
        iconName="cancelCircle" 
        iconSize={10} 
        onClick={clearValue} 
      />
      <SearchIcon 
        iconName="search" 
        iconSize={15} 
        onClick={search} 
      />
    </Container> 
  )
}

export default Search;
