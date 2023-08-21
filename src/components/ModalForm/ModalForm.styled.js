import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(46, 47, 66, 0.2);
  z-index: 1200;
`;

export const Container = styled.div`
  overflow-y: hidden;
`;
