import React from "react";
import * as S from "./Styles";
import MenuButton from "./menuButton/MenuButton";

export interface Props {
  disable?: boolean;
}

const Menu: React.FC<Props> = ({ disable = false }) => {
  // Props 인터페이스를 컴포넌트와 연결
  const handleClick = (index: number) => {
    console.log(`Button ${index} clicked`);
  };

  const buttons = [
    { label: "모든 지역", selected: true },
    { label: "성별", selected: false },
    { label: "레벨", selected: false },
    { label: "랭크", selected: false },
  ];

  return (
    <S.Layout>
      {buttons.map((button, index) => (
        <MenuButton
          key={index}
          label={button.label}
          selected={button.selected}
          onClick={
            disable
              ? () => {
                  alert("종목 변경을 원하시면 목록 페이지로 돌아가 주세요.");
                }
              : () => handleClick(index)
          }
        />
      ))}
    </S.Layout>
  );
};

export default Menu;
