import {ChangeEvent, FormEvent, useState} from 'react';
import * as S from './Styles';
import Search from '@/assets/svg/search.svg?react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Search term submitted:', searchTerm);
    // Add search logic here
  };
  return (
    <S.Container>
      <form onSubmit={handleSearchSubmit} className='w-full max-w-md'>
        <S.SearchBarContainer>
          <S.IconDiv>
            <Search style={{width: '24px', height: '24px'}} />
          </S.IconDiv>
          <S.Input
            type='text'
            placeholder='지역, 팀 이름으로 검색'
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </S.SearchBarContainer>
      </form>
    </S.Container>
  );
};

export default SearchBar;
