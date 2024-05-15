import React, {useState} from 'react';
import * as S from './Styles';
import Down from '@/assets/svg/down.svg?react';

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
        <Down
          style={{
            // position: 'absolute',
            // right: '16px',
            marginLeft: 'auto',
            width: '25px',
            height: '12px',
          }}
        />
      </S.StyledButton>
      {isOpen && <S.ContentArea>{children}</S.ContentArea>}
    </S.DropdownContainer>
  );
};

export default Dropdown;
