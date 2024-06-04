import React, {useState, useEffect} from 'react';
import {useRecoilState} from 'recoil';
import axios from 'axios';
import {
  gameDataState,
  selectedQuarterState,
  selectedTeamState,
} from '@/recoil/matchlist/States';
import * as S from './Styles';
import POMImage from '@/assets/POM 😎.png';
import Red2Image from '@/assets/red_2.png';
import GreenImage from '@/assets/green.png';
import BlueImage from '@/assets/blue.png';
import GoalImage from '@/assets/goal.png';
import AssistImage from '@/assets/assist.png';
import DefenseImage from '@/assets/defense.png';
import {GameData} from '@/recoil/matchlist/Types';

const getTeamImage = (team: string) => {
  switch (team) {
    case 'RED':
      return Red2Image;
    case 'GREEN':
      return GreenImage;
    case 'BLUE':
      return BlueImage;
    default:
      return '';
  }
};

const MatchList: React.FC = () => {
  const [gameData, setGameData] = useRecoilState(gameDataState);
  const [selectedQuarter, setSelectedQuarter] =
    useRecoilState(selectedQuarterState);
  const [selectedTeam, setSelectedTeam] = useRecoilState(selectedTeamState);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get('http://13.209.18.210/api/record?userId=2')
      .then(response => {
        if (response.data.code === '200' && response.data.isSuccess) {
          const data: GameData = response.data.data[0];
          setGameData(data);
          setSelectedQuarter(data.quarterRecords[0].quarter); // 처음 1쿼터 자동 선택
        }
      })
      .catch(error => {
        console.error('Error fetching game data:', error);
      });
  }, [setGameData, setSelectedQuarter]);

  const handleQuarterChange = (quarter: string) => {
    setSelectedQuarter(quarter);
  };

  const handleTeamChange = (team: string) => {
    setSelectedTeam(team);
  };

  const handlePlayerSelect = (userId: number) => {
    setSelectedPlayer(userId);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const blockUser = () => {
    if (selectedPlayer !== null) {
      axios
        .post(
          `http://13.209.18.210/users/23/blocks?blockedUserId=${selectedPlayer}`,
        )
        .then(response => {
          console.log('User blocked successfully:', response.data);
        })
        .catch(error => {
          console.error('Error blocking user:', error);
        });
    }
  };

  return (
    <S.AppContainer>
      {gameData && (
        <>
          <S.GameInfo onClick={toggleDropdown}>
            <S.InfoItem>
              <S.Label>Date:</S.Label>
              <S.Value>{gameData.date}</S.Value>
            </S.InfoItem>
            <S.InfoItem>
              <S.Label>Place:</S.Label>
              <S.Value>{gameData.place}</S.Value>
            </S.InfoItem>
            <S.InfoItem>
              <S.Label>Type:</S.Label>
              <S.Value>{gameData.type}</S.Value>
            </S.InfoItem>
            {gameData.isPom && <S.POM src={POMImage} alt='POM' />}
            <S.InfoItem>
              <S.Label>Point:</S.Label>
              <S.Value>
                {gameData.point > 0
                  ? `+${gameData.point}P`
                  : `${gameData.point}P`}
              </S.Value>
            </S.InfoItem>
            <S.NumberColorImage src={Red2Image} alt='RED 2' />
          </S.GameInfo>

          {dropdownOpen && (
            <>
              <S.QuarterButtonContainer>
                {gameData.quarterRecords.map(record => (
                  <S.QuarterButton
                    key={record.quarter}
                    onClick={() => handleQuarterChange(record.quarter)}
                    active={selectedQuarter === record.quarter}
                  >
                    {record.quarter}
                  </S.QuarterButton>
                ))}
              </S.QuarterButtonContainer>

              {selectedQuarter && (
                <S.QuarterInfo>
                  {gameData.quarterRecords
                    .filter(record => record.quarter === selectedQuarter)
                    .map(record => (
                      <div key={record.quarter}>
                        <S.ScoreContainer>
                          <S.TeamScore>
                            <img
                              src={getTeamImage(record.team1)}
                              alt={record.team1}
                            />
                            <S.Score>{record.team1Goal}</S.Score>
                            <S.Score>:</S.Score>
                            <S.Score>{record.team2Goal}</S.Score>
                            <img
                              src={getTeamImage(record.team2)}
                              alt={record.team2}
                            />
                          </S.TeamScore>
                        </S.ScoreContainer>
                        <S.TeamContainer>
                          <S.Team>
                            {record.team1Record.map(player => (
                              <S.PlayerStats key={player.num}>
                                <img
                                  src={getTeamImage(record.team1)}
                                  alt={record.team1}
                                />
                                <img src={GoalImage} alt='Goal' />
                                <p>{player.goal}</p>
                                <img src={AssistImage} alt='Assist' />
                                <p>{player.assist}</p>
                                <img src={DefenseImage} alt='Defense' />
                                <p>{player.defense}</p>
                              </S.PlayerStats>
                            ))}
                          </S.Team>
                          <S.Team>
                            {record.team2Record.map(player => (
                              <S.PlayerStats key={player.num}>
                                <img
                                  src={getTeamImage(record.team2)}
                                  alt={record.team2}
                                />
                                <img src={GoalImage} alt='Goal' />
                                <p>{player.goal}</p>
                                <img src={AssistImage} alt='Assist' />
                                <p>{player.assist}</p>
                                <img src={DefenseImage} alt='Defense' />
                                <p>{player.defense}</p>
                              </S.PlayerStats>
                            ))}
                          </S.Team>
                        </S.TeamContainer>
                      </div>
                    ))}
                </S.QuarterInfo>
              )}
              <S.TeamButtonContainer>
                <S.TeamButton
                  onClick={() => handleTeamChange('RED')}
                  active={selectedTeam === 'RED'}
                >
                  레드팀
                </S.TeamButton>
                <S.TeamButton
                  onClick={() => handleTeamChange('GREEN')}
                  active={selectedTeam === 'GREEN'}
                >
                  그린팀
                </S.TeamButton>
                <S.TeamButton
                  onClick={() => handleTeamChange('BLUE')}
                  active={selectedTeam === 'BLUE'}
                >
                  블루팀
                </S.TeamButton>
              </S.TeamButtonContainer>

              {selectedTeam === 'RED' && (
                <S.TeamInfo>
                  {gameData.redTeam.map(player => (
                    <S.PlayerStats
                      key={player.userId}
                      onClick={() => handlePlayerSelect(player.userId)}
                      active={selectedPlayer === player.userId}
                    >
                      <S.PlayerSelectButton
                        active={selectedPlayer === player.userId}
                      />
                      <img
                        src={getTeamImage(player.color)}
                        alt={player.color}
                      />
                      <p>{player.name}</p>
                      <p>{player.age}세</p>
                      <p>{player.location}</p>
                    </S.PlayerStats>
                  ))}
                </S.TeamInfo>
              )}
              {selectedTeam === 'GREEN' && (
                <S.TeamInfo>
                  {gameData.greenTeam.map(player => (
                    <S.PlayerStats
                      key={player.userId}
                      onClick={() => handlePlayerSelect(player.userId)}
                      active={selectedPlayer === player.userId}
                    >
                      <S.PlayerSelectButton
                        active={selectedPlayer === player.userId}
                      />
                      <img
                        src={getTeamImage(player.color)}
                        alt={player.color}
                      />
                      <p>{player.name}</p>
                      <p>{player.age}세</p>
                      <p>{player.location}</p>
                    </S.PlayerStats>
                  ))}
                </S.TeamInfo>
              )}
              {selectedTeam === 'BLUE' && (
                <S.TeamInfo>
                  {gameData.blueTeam.map(player => (
                    <S.PlayerStats
                      key={player.userId}
                      onClick={() => handlePlayerSelect(player.userId)}
                      active={selectedPlayer === player.userId}
                    >
                      <S.PlayerSelectButton
                        active={selectedPlayer === player.userId}
                      />
                      <img
                        src={getTeamImage(player.color)}
                        alt={player.color}
                      />
                      <p>{player.name}</p>
                      <p>{player.age}세</p>
                      <p>{player.location}</p>
                    </S.PlayerStats>
                  ))}
                </S.TeamInfo>
              )}

              <S.BlockButton onClick={blockUser}>차단하기</S.BlockButton>
            </>
          )}
        </>
      )}
    </S.AppContainer>
  );
};

export default MatchList;
