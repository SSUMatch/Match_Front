import styled from '@emotion/styled';
import Color from '@/styles/Color';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${Color.TrueWhite};
  padding: 2rem;
  border-radius: 1rem;
  width: 30rem;
  max-width: 90%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: ${Color.TrueBlack};
`;

export const ModalBody = styled.div`
  margin: 1.5rem 0;
  font-size: 1.2rem;
  color: ${Color.Gray70};
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalButton = styled.button`
  background-color: ${Color.Applying};
  color: ${Color.TrueWhite};
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${Color.Blue};
  }
`;
