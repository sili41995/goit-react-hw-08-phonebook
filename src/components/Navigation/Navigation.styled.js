import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const GAP_DEFAULT = '20px';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: ${GAP_DEFAULT};
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: ${GAP_DEFAULT};
`;

export const Link = styled(NavLink)`
  display: block;
  width: 100px;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #fff;
  color: #fff;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  text-align: center;
  &:hover,
  &:focus,
  &.active {
    color: #38b6ff;
    background-color: #fff;
  }
`;

export const AddContactLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  width: 100px;
  align-items: center;
  border-radius: 5px;
  background: #55c875;
  padding: 12px;
  color: #000000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
`;
