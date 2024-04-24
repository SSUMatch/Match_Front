import styled from "@emotion/styled";
// import { supportScreenSize } from "../styles/GlobalStyle.tsx";
import Header from "../components/header/Header.tsx";
import Footer from "../components/footer/Footer.tsx";
import WebContent from "../components/content/Content.tsx";

function DefaultLayout() {
  return (
    <Root>
      <Header />
      <WebContent />
      <Footer />
    </Root>
  );
}
const supportScreenSize = 1280;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  @media all and (max-width: ${supportScreenSize}px) {
    width: 100vw;
  }
`;

export default DefaultLayout;
