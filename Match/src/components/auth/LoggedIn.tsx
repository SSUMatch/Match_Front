import {useNavigate} from 'react-router-dom';
import * as H from '../header/Styles';

export const LoggedIn = ({logoutHandler}: {logoutHandler: () => void}) => {
  const navigate = useNavigate();
  return (
    <H.RowContainer>
      <H.LogoutText onClick={logoutHandler}>로그아웃</H.LogoutText>
      <H.LogoutText onClick={() => navigate('/mypage')}>
        마이페이지
      </H.LogoutText>
    </H.RowContainer>
  );
};
