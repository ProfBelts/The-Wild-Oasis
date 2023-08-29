/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

function App() {
  const StyledApp = styled.main`
    background-color: orangered;
    padding: 20px;
  `;

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Hello World</Heading>
        <Button> Check In </Button>
        <Heading as="h2">Hello World</Heading>
        <Heading as="h3">Hello World</Heading>
        <Input type="number" placeholder="Number of Guests"></Input>
      </StyledApp>
    </>
  );
}

export default App;
