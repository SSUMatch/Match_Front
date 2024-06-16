import React from 'react';
import {useNavigate} from 'react-router-dom';
import * as S from './Styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, message}) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleConfirm = () => {
    onClose();
    navigate('/');
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalHeader>알림</S.ModalHeader>
        <S.ModalBody>{message}</S.ModalBody> {/* 메시지를 출력 */}
        <S.ModalFooter>
          <S.ModalButton onClick={handleConfirm}>확인</S.ModalButton>
        </S.ModalFooter>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
