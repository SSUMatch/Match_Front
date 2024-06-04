import {useNavigate} from 'react-router-dom';
import * as H from './Styles';
import {LoggedOut} from '@/components/auth/LoggedOut.tsx';
import Logo from '@/assets/svg/logo.svg?react';

const Header = () => {
  const navigate = useNavigate();
  return (
    <H.Header>
      <H.RightContainer>
        <H.RowContainer>
          <H.LogoWrap onClick={() => navigate('/')}>
            <Logo />
            SSU Match{/* <HeaderIcon onClick={() => navigate("/")} /> */}
          </H.LogoWrap>
          <H.Gap>
            <LoggedOut />
            {/* {LoggedIn ? ( */}
            {/*   <div> */}
            {/*     <H.Button onClick={MypageHandler}>마이페이지</H.Button> */}
            {/*     <H.Button onClick={handleLogout}>로그아웃</H.Button> */}
            {/*   </div> */}
            {/* ) : ( */}
            {/*   <LoggedOut /> */}
            {/* )} */}
          </H.Gap>
        </H.RowContainer>
      </H.RightContainer>
      <H.BtnWrap>
        <H.HeaderBtn onClick={() => navigate('/')}>홈</H.HeaderBtn>
        <H.HeaderBtn onClick={() => navigate('/favorites')}>
          즐겨찾기
        </H.HeaderBtn>
        <H.HeaderBtn onClick={() => navigate('/archive')}>
          기록 저장소
        </H.HeaderBtn>
        <H.HeaderBtn onClick={() => navigate('/ranking')}>랭킹</H.HeaderBtn>
        <H.HeaderBtn onClick={() => navigate('/nearby')}>
          주변 구장 찾기
        </H.HeaderBtn>
      </H.BtnWrap>
    </H.Header>
  );
};

export default Header;
