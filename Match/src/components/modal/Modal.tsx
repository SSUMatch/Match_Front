import React from 'react';
import {useNavigate} from 'react-router-dom';
import * as S from './Styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({isOpen}) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleConfirm = () => {
    console.log('모달 클릭');
    navigate('/');
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalHeader>알림</S.ModalHeader>
        <S.ModalBody>매치 신청이 완료되었습니다</S.ModalBody>
        <S.ModalFooter>
          <S.ModalButton onClick={handleConfirm}>확인</S.ModalButton>
        </S.ModalFooter>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
