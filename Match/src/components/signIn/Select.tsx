import React from 'react';
import {UseFormRegister} from 'react-hook-form';
import {SignInProps} from '@/constants/Interfaces';
import * as S from './Styles';

interface SelectProps {
  label: string;
  name: keyof SignInProps;
  options: {value: string; label: string}[];
  register: UseFormRegister<SignInProps>;
  placeholder: string;
  error?: string;
}

const Select: React.FC<SelectProps> = ({
  name,
  options,
  register,
  placeholder,
  error,
}) => (
  <div>
    <S.SelectLarge {...register(name)}>
      <S.SelectOption value='' disabled hidden>
        {placeholder}
      </S.SelectOption>
      {options.map(option => (
        <S.SelectOption key={option.value} value={option.value}>
          {option.label}
        </S.SelectOption>
      ))}
    </S.SelectLarge>
    {error && <div style={{color: 'red'}}>{error}</div>}
  </div>
);

export default Select;
