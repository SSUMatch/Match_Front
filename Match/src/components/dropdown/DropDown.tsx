import React, {useState} from 'react';
import * as S from './Styles';
import Down from '@/assets/svg/down.svg?react';
import Up from '@/assets/svg/up.svg?react';

interface DropdownProps {
  label: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({label, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <S.DropdownContainer>
      <S.StyledButton onClick={toggleDropdown}>
        <S.LabelContainer>{label}</S.LabelContainer>
        {isOpen ? (
          <Up
            style={{
              marginLeft: 'auto',
              width: '25px',
              height: '12px',
            }}
          />
        ) : (
          <Down
            style={{
              marginLeft: 'auto',
              width: '25px',
              height: '12px',
            }}
          />
        )}
      </S.StyledButton>
      {isOpen && <S.ContentArea>{children}</S.ContentArea>}
    </S.DropdownContainer>
  );
};

export default Dropdown;
