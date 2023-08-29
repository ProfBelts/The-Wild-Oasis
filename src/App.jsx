/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

function App() {
  const StyledApp = styled.main`
    padding: 20px;
  `;

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>

            <div>
              <Heading as="h2">Check in and Out</Heading>
              <Button> Check In </Button>
              <Button variation="secondary" size="small">
                {" "}
                Check Out{" "}
              </Button>
            </div>
          </Row>
          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of Guests"></Input>
              <Input type="number" placeholder="Number of Guests"></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
