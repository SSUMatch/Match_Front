import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useForm, SubmitHandler} from 'react-hook-form';
import axios from 'axios';
import * as L from './Styles';
import {LoginProps} from '@/constants/Interfaces';
import {defaultLoginValue} from '@/constants/DefaultFormOptions';
import FormRequirements from '../../constants/FormRequirements';
import {AuthContext} from '@/components/auth/AuthProvider';

const {idRequirements, passwordRequirements} = FormRequirements;
const defaultValue = defaultLoginValue;

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {setIsLoggedIn, setAccessToken} = useContext(AuthContext);

  function signInPage() {
    navigate('/signIn');
  }

  function forgotPage() {
    navigate('/forgot');
  }

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginProps>({
    defaultValues: defaultValue,
  });

  const onSubmitHandler: SubmitHandler<LoginProps> = async data => {
    console.log(data);
    const formData = {
      account: data.account,
      password: data.password,
    };
    console.log(formData);
    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://kusitms28.store/auth/signin',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status === 200) {
        const user = response.data.data; // 실제 데이터는 response.data.data에 있음
        const {accessToken, refreshToken} = user;

        // token 저장
        localStorage.setItem('refreshToken', refreshToken);
        // 리코일에 jwt토큰에 업뎃
        setAccessToken(accessToken);
        // 리코일에 유저정보 저장
        // setUser(user);
        setIsLoggedIn(true);
        navigate('/');
      } else {
        console.log('로그인 실패');
        alert('로그인에 실패하셨습니다. 다시 로그인해주세요');
      }
    } catch (error) {
      console.error('로그인 오류', error);
      alert('로그인 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <L.Layout>
      <L.H2>로그인</L.H2>
      <L.Container onSubmit={handleSubmit(onSubmitHandler)}>
        <L.Box>
          <div>
            <L.Input
              type='id'
              placeholder='아이디를 입력하세요'
              {...register('account', {...idRequirements})}
            />
            {errors.account && (
              <L.ErrorDiv>{errors.account.message}</L.ErrorDiv>
            )}
          </div>
          <div>
            <L.Input
              type='password'
              placeholder='비밀번호를 입력하세요'
              {...register('password', {...passwordRequirements})}
            />
            {errors.password && errors.password.type === 'pattern' && (
              <L.ErrorDiv>{errors.password.message}</L.ErrorDiv>
            )}
          </div>
          <L.SubmitButton type='submit'>
            {isLoading ? 'LOGINING...' : '로그인'}
          </L.SubmitButton>
        </L.Box>
      </L.Container>
      <L.Line />
      <L.ButtonDiv>
        <L.Button onClick={forgotPage}>아이디 찾기 · 비밀번호 찾기</L.Button>
        <L.ButtonLine />
        <L.Button onClick={signInPage}>회원가입</L.Button>
      </L.ButtonDiv>
    </L.Layout>
  );
};

export default Login;
