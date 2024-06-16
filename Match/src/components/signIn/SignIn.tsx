import axios from 'axios';
import {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import * as S from './Styles';
import {SignInProps} from '@/constants/Interfaces';
import {defaultSignInFormValue} from '@/constants/DefaultFormOptions';
import FormRequirements from '@/constants/FormRequirements';

const SignIn = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState('');

  const handleButtonClick = (selectedGender: string) => {
    setGender(selectedGender); // 클릭된 버튼의 상태를 업데이트
  };

  const onSubmitHandler: SubmitHandler<SignInProps> = async data => {
    try {
      const formData = {
        ...data,
        gender, // gender 값을 추가
      };

      console.log('폼데이터 : ', formData);

      const res = await axios.post(
        'https://kusitms28.store/auth/signup',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (res.status === 200) {
        console.log(res.data);
        alert('회원가입이 완료되었습니다.');
        navigate('/');
      } else if (res.status === 400) {
        alert('이미 존재하는 유저입니다.');
      }

      if (!gender) {
        alert('성별을 선택해주세요.');
      }
    } catch (error) {
      console.error(error);
      alert('회원가입에 실패하셨습니다. 다시 회원가입 해주세요');
    }
  };

  const {
    nameRequirements,
    ageRequirements,
    passwordRequirements,
    idRequirements,
  } = FormRequirements;

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInProps>({
    defaultValues: {...defaultSignInFormValue},
  });

  return (
    <S.Layout>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <S.H2>회원가입</S.H2>
        <S.Box>
          <S.InputLabel>아이디</S.InputLabel>
          <S.InputLarge
            type='text'
            placeholder='아이디를 입력하세요'
            {...register('id', idRequirements)}
          />
          {errors.id && <S.ErrorDiv>{errors.id.message}</S.ErrorDiv>}
        </S.Box>

        <S.Box>
          <S.InputLabel>비밀번호</S.InputLabel>
          <S.InputLarge
            type='password'
            placeholder='비밀번호를 입력하세요'
            {...register('password', passwordRequirements)}
          />
          {errors.password && (
            <S.ErrorDiv>{errors.password.message}</S.ErrorDiv>
          )}
        </S.Box>
        <S.Box>
          <S.InputLabel>이름</S.InputLabel>
          <S.InputLarge
            type='text'
            placeholder='이름을 입력하세요'
            {...register('name', nameRequirements)}
          />
          {errors.name && <S.ErrorDiv>{errors.name.message}</S.ErrorDiv>}
        </S.Box>

        <S.Box>
          <S.InputLabel>나이</S.InputLabel>
          <S.InputLarge
            type='number'
            placeholder='나이를 입력하세요'
            {...register('age', ageRequirements)}
          />
          {errors.age && <S.ErrorDiv>{errors.age.message}</S.ErrorDiv>}
        </S.Box>
        <S.Box>
          <S.InputLabel>성별</S.InputLabel>
          <div>
            <S.Genderbutton
              type='button'
              isselected={gender === 'MALE'}
              onClick={() => handleButtonClick('MALE')}
            >
              남자
            </S.Genderbutton>
            <S.Genderbutton
              type='button'
              isselected={gender === 'FEMALE'}
              onClick={() => handleButtonClick('FEMALE')}
            >
              여자
            </S.Genderbutton>
          </div>
        </S.Box>
        <S.Box>
          <S.InputLabel>위치</S.InputLabel>
          <S.InputLarge
            type='text'
            placeholder='위치를 입력하세요'
            {...register('loacation', {required: '위치를 입력해주세요'})}
          />
          {errors.loacation && (
            <S.ErrorDiv>{errors.loacation.message}</S.ErrorDiv>
          )}
        </S.Box>
        <S.Box>
          <S.InputLabel>포지션</S.InputLabel>
          <S.InputLarge
            type='text'
            placeholder='포지션을 입력하세요'
            {...register('position', {required: '포지션을 입력해주세요'})}
          />
          {errors.position && (
            <S.ErrorDiv>{errors.position.message}</S.ErrorDiv>
          )}
        </S.Box>
        <S.Box>
          <S.SubmitButton type='submit'>회원가입</S.SubmitButton>
        </S.Box>
      </form>
    </S.Layout>
  );
};

export default SignIn;
