import { AppRouter } from "router/AppRouter";
import styled from "styled-components";
import tw from "twin.macro";

const AppContainer = styled.div`
  ${tw`bg-loxadev-ligth-gray min-h-full w-full`}
`;

function App() {
  return (
    <AppContainer>
      <AppRouter />
    </AppContainer>
  );
}

export default App;
