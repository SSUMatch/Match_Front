import styled from '@emotion/styled';
// import { supportScreenSize } from "../styles/GlobalStyle.tsx";
import Header from '../components/header/Header.tsx';
import Footer from '../components/footer/Footer.tsx';
import WebContent from '../components/content/Content.tsx';

const supportScreenSize = 1280;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  @media all and (max-width: ${supportScreenSize}px) {
    width: 100vw;
  }
`;
const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const DefaultLayout = () => {
  return (
    <Root>
      <Header />
      <ContentWrapper>
        <WebContent />
      </ContentWrapper>
      <Footer />
    </Root>
  );
};

export default DefaultLayout;
