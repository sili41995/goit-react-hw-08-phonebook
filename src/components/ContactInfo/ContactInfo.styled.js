import styled from '@emotion/styled';
import { CiEdit } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  /* padding: 8px; */
  /* flex-grow: 1; */
`;

export const EditButton = styled.button`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* margin-left: auto; */
  /* width: 44px; */
  /* height: 35px; */
  /* padding: 4px; */
  /* background-color: #7fd1ff; */
  /* border-radius: 8px; */
  /* border-color: transparent; */
  /* &:hover, */
  /* &:focus { */
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
  /* } */
`;

export const Image = styled.img`
  /* width: 112px; */
  /* margin: 0 auto 6px; */
`;

export const ContactTitle = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: 8px; */
`;

export const ContactName = styled.p`
  /* color: #000; */
  /* font-family: Jua; */
  /* font-size: 18px; */
  /* font-style: normal; */
  /* font-weight: 400; */
  /* line-height: normal; */
  /* text-align: center; */
`;

export const ContactDesc = styled.p`
  /* color: #7c7c7c; */
  /* font-family: Inter; */
  /* font-size: 15px; */
  /* font-style: normal; */
  /* font-weight: 500; */
  /* line-height: normal; */
  /* text-align: center; */
`;

export const Navigation = styled.nav`
  /* display: flex; */
  /* justify-content: space-between; */
  /* padding: 2px; */
  /* border-radius: 10px; */
  /* background: #eee; */
  /* margin-top: 80px; */
  /* margin-bottom: 40px; */
`;

export const Link = styled(NavLink)`
  /* padding: 5px 20px; */
  /* border-radius: 10px; */
  /* color: #555; */
  /* font-family: Jua; */
  /* font-size: 15px; */
  /* font-style: normal; */
  /* font-weight: 400; */
  /* line-height: normal; */
  /* text-decoration: none; */
  /* &.active { */
  /* background: #44de6f; */
  /* } */
`;

export const EditIcon = styled(CiEdit)`
  /* width: 100%; */
  /* height: 100%; */
  /* fill: #2681ed; */
`;
