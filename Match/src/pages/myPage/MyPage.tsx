import {useEffect} from 'react';
import axios from 'axios';
import {useRecoilState} from 'recoil';
import {UserState} from '@/recoil/user/States';
import * as S from './Styles';

const MyPage = () => {
  const [user, setUser] = useRecoilState(UserState);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://13.209.18.210/users/1');
        if (response.data.code === '200' && response.data.isSuccess) {
          setUser(response.data.data);
        } else {
          console.error('Failed to fetch data:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchUserData();
  }, [setUser]);

  return (
    <S.PageContainer>
      <S.Sidebar>
        <S.SidebarItem>팀정보</S.SidebarItem>
        <S.SidebarItem>기록</S.SidebarItem>
        <S.SidebarItem>즐겨찾기</S.SidebarItem>
        <S.SidebarItem>차단 목록</S.SidebarItem>
        <S.SidebarItem>랭킹</S.SidebarItem>
        <S.SidebarItem>주변 구장 찾기</S.SidebarItem>
        <S.SidebarItem>자주 묻는 질문</S.SidebarItem>
        <S.SidebarItem>매니저 지원</S.SidebarItem>
      </S.Sidebar>
      <S.Content>
        {user && (
          <div>
            <S.RecordInfo>
              <S.UserImage src={user.image} alt={user.name} />
              <S.RecordWrap>
                <S.RecordItem>
                  <S.Label>이름</S.Label>
                  {user.name}
                </S.RecordItem>
                <S.RecordItem>
                  <S.Label>나이</S.Label>
                  {user.age}
                </S.RecordItem>
              </S.RecordWrap>
              <S.RecordWrap>
                <S.RecordItem>
                  <S.Label>등급</S.Label>
                  {user.grade}
                </S.RecordItem>
                <S.RecordItem>
                  <S.Label>활동 지역</S.Label>
                  {user.location}
                </S.RecordItem>
              </S.RecordWrap>
              <S.RecordLongItem>
                <S.Label>소개</S.Label>
                {user.description}
              </S.RecordLongItem>
            </S.RecordInfo>
          </div>
        )}
      </S.Content>
    </S.PageContainer>
  );
};

export default MyPage;
