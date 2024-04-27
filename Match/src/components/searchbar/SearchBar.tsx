import React, {useState} from 'react';
import * as S from './Styles';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <S.SearchBarContainer>
      <form
        onSubmit={handleSearchSubmit}
        className='flex items-center space-x-2 shadow-md rounded-full p-2 w-full max-w-md'
      >
        {/* <S.IconDiv>/!* <S.SearchIcon /> *!/</S.IconDiv> */}
        <S.Input
          type='text'
          placeholder='지역, 팀 이름으로 검색'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </form>
    </S.SearchBarContainer>
  );
};

export default SearchBar;
