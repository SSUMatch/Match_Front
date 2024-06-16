import axios from 'axios';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import * as S from './Styles';
import {SignInProps} from '@/constants/Interfaces';
import {defaultSignInFormValue} from '@/constants/DefaultFormOptions';
import FormRequirements from '@/constants/FormRequirements';
import Select from './Select';
import {
  genderOptions,
  locationOptions,
  positionOptions,
} from '@/constants/SelectOptions';

const SignIn = () => {
  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<SignInProps> = async data => {
    try {
      const formData = {
        ...data,
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
            name='id'
            ref={register('id', idRequirements).ref}
            onChange={register('id', idRequirements).onChange}
            onBlur={register('id', idRequirements).onBlur}
          />
          {errors.id && <S.ErrorDiv>{errors.id.message}</S.ErrorDiv>}
        </S.Box>

        <S.Box>
          <S.InputLabel>비밀번호</S.InputLabel>
          <S.InputLarge
            type='password'
            placeholder='비밀번호를 입력하세요'
            name='password'
            ref={register('password', passwordRequirements).ref}
            onChange={register('password', passwordRequirements).onChange}
            onBlur={register('password', passwordRequirements).onBlur}
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
            name='name'
            ref={register('name', nameRequirements).ref}
            onChange={register('name', nameRequirements).onChange}
            onBlur={register('name', nameRequirements).onBlur}
          />
          {errors.name && <S.ErrorDiv>{errors.name.message}</S.ErrorDiv>}
        </S.Box>

        <S.Box>
          <S.InputLabel>나이</S.InputLabel>
          <S.InputLarge
            type='number'
            placeholder='나이를 입력하세요'
            name='age'
            ref={register('age', ageRequirements).ref}
            onChange={register('age', ageRequirements).onChange}
            onBlur={register('age', ageRequirements).onBlur}
          />
          {errors.age && <S.ErrorDiv>{errors.age.message}</S.ErrorDiv>}
        </S.Box>

        <S.Box>
          <S.InputLabel>성별</S.InputLabel>
          <Select
            label='성별'
            name='gender'
            options={genderOptions}
            register={register}
            placeholder='성별을 선택하세요'
            error={errors.gender?.message}
          />
        </S.Box>

        <S.Box>
          <S.InputLabel>활동 지역</S.InputLabel>
          <Select
            label='위치'
            name='loacation'
            options={locationOptions}
            register={register}
            placeholder='활동 지역을 선택하세요'
            error={errors.loacation?.message}
          />
        </S.Box>

        <S.Box>
          <S.InputLabel>선호 포지션</S.InputLabel>
          <Select
            label='포지션'
            name='position'
            options={positionOptions}
            register={register}
            placeholder='선호 포지션을 선택하세요'
            error={errors.position?.message}
          />
        </S.Box>

        <S.Box>
          <S.SubmitButton type='submit'>회원가입</S.SubmitButton>
        </S.Box>
      </form>
    </S.Layout>
  );
};

export default SignIn;
