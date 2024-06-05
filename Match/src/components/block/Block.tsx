import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useRecoilState} from 'recoil';
import * as L from './Styles';
import {BlockState} from '@/recoil/block/States';

const BlockList: React.FC = () => {
  const [blocks, setBlocks] = useRecoilState(BlockState);
  const [clicked, setClicked] = useState<{[key: number]: boolean}>({});
  const [allSelected, setAllSelected] = useState(false);

  const fetchBlocks = () => {
    axios
      .get('https://kusitms28.store/users/1/blocks')
      .then(response => {
        if (response.data.code === '200' && response.data.isSuccess) {
          setBlocks(response.data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching block data:', error);
      });
  };

  useEffect(() => {
    fetchBlocks();
  }, []);

  const handleIconClick = (id: number) => {
    setClicked(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleSelectAll = () => {
    const newClicked = blocks.reduce(
      (acc, item) => {
        acc[item.blockId] = !allSelected;
        return acc;
      },
      {} as {[key: number]: boolean},
    );

    setClicked(newClicked);
    setAllSelected(!allSelected);
  };

  const handleUnblockSelected = () => {
    const selectedIds = Object.keys(clicked)
      .filter(id => clicked[parseInt(id)])
      .map(id => parseInt(id));

    Promise.all(
      selectedIds.map(id =>
        axios.delete(`https://kusitms28.store/users/1/blocks/${id}`),
      ),
    )
      .then(responses => {
        if (
          responses.every(
            response => response.data.code === '204' && response.data.isSuccess,
          )
        ) {
          fetchBlocks(); // 상태를 업데이트하여 목록을 다시 가져옴
        }
      })
      .catch(error => {
        console.error('Error unblocking users:', error);
      });

    // 차단 해제 후 상태 업데이트
    setClicked(prevClicked => {
      const newClicked = {...prevClicked};
      selectedIds.forEach(id => {
        delete newClicked[id];
      });
      return newClicked;
    });
    setAllSelected(false);
  };

  return (
    <L.ListContainer>
      <L.Title>차단 목록</L.Title>
      <L.SelectAllButton onClick={handleSelectAll}>
        {allSelected ? '선택 해제' : '전체 선택'}
      </L.SelectAllButton>
      {blocks.map(b => (
        <L.BlockItem key={b.blockId}>
          <L.IconWrap onClick={() => handleIconClick(b.blockId)}>
            <L.PlayerSelectButton active={!!clicked[b.blockId]} />
          </L.IconWrap>
          <L.BlockUserImage src={b.image} alt={b.name} />
          <L.BlockLabelName>{b.name}</L.BlockLabelName>
          <L.BlockLabelName>{b.age}세</L.BlockLabelName>
          <L.BlockLabelName>{b.location}</L.BlockLabelName>
        </L.BlockItem>
      ))}
      <L.DeleteButton onClick={handleUnblockSelected}>차단 해제</L.DeleteButton>
    </L.ListContainer>
  );
};

export default BlockList;
