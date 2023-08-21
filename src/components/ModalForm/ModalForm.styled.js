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
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Container = styled.div`
  width: 600px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  background-color: #fcfcfc;
  padding: 40px;
  margin: 40px auto;
  border-radius: 30px;
  box-shadow: 0px 4px 17px 0px rgba(0, 0, 0, 0.17);
  overflow-y: hidden;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 40px;
  align-self: center;
`;
