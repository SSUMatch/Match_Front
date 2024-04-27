import * as F from './Styles.tsx';
// import logo from "../../assets/icons/header_logo.svg";

const Footer = () => {
  return (
    <F.Footer>
      <F.Box>
        {/* <F.LogoWrapper src={logo} alt="logo" /> */}
        <F.LogoText>Match</F.LogoText>
      </F.Box>
      <F.TextWrapper>
        <F.Text>개인정보 처리 방침</F.Text>
        <F.Line />
        <F.Text>TEAM Match</F.Text>
      </F.TextWrapper>
    </F.Footer>
  );
};
export default Footer;
