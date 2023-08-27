import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
  `;

  const Button = styled.button`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
    border: none;
    border-radius: 7px;
    background-color: var(--color-brand-600);
    color: white;
    cursor: pointer;
  `;

  const StyledApp = styled.main`
    background-color: orangered;
    padding: 20px;
  `;

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Hello World</H1>
        <Button> Check in</Button>
      </StyledApp>
    </>
  );
}

export default App;
