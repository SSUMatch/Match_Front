import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import * as H from './Styles';
import {LoggedOut} from '@/components/auth/LoggedOut.tsx';
import Logo from '@/assets/svg/logo.svg?react';
import {AuthContext} from '@/components/auth/AuthProvider.tsx';
import {LoggedIn} from '@/components/auth/LoggedIn.tsx';

const Header = () => {
  const navigate = useNavigate();

  // const user = useRecoilValue<LoginProps>(userAtom);
  const {logoutHandler, isLoggedIn} = useContext(AuthContext);

  return (
    <H.Header>
      <H.RightContainer>
        <H.RowContainer>
          <H.LogoWrap onClick={() => navigate('/')}>
            <Logo />
            SSU Match{/* <HeaderIcon onClick={() => navigate("/")} /> */}
          </H.LogoWrap>
          <H.Gap>
            {isLoggedIn ? (
              <LoggedIn logoutHandler={logoutHandler} />
            ) : (
              <LoggedOut />
            )}
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
