import React from 'react';
import * as S from './Styles';
import {MenuButtonProps} from './MenuButtonProps';

const MenuButton: React.FC<MenuButtonProps> = ({label, selected, onClick}) => {
  return (
    <>
      {selected ? (
        <S.SelectedBtn onClick={onClick}>{label}</S.SelectedBtn>
      ) : (
        <S.StyledBtn onClick={onClick}>{label}</S.StyledBtn>
      )}
    </>
  );
};

export default MenuButton;
