import React, {useState} from 'react';
import * as S from './Styles';

interface DropdownProps {
  label: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({label, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div>
      <S.StyledButton onClick={toggleDropdown}>{label}</S.StyledButton>
      {isOpen && <S.ContentArea>{children}</S.ContentArea>}
    </div>
  );
};

export default Dropdown;
