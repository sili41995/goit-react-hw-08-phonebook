import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  /* align-items: center; */
  /* padding: ${({ theme }) => theme.spacing * 3}px; */
  /* border-radius: 10px; */
  /* border: 0.5px solid rgba(137, 137, 137, 0.43); */
  /* &:hover, */
  /* &:focus { */
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
  /* } */
`;

export const ContactLink = styled(Link)`
  /* display: flex; */
  /* gap: ${({ theme }) => theme.primaryGap}px; */
  /* text-decoration: none; */
`;

export const Image = styled.img`
  /* width: 70px; */
`;

export const ContactInfo = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* width: 100%; */
  /* justify-content: space-between; */
  /* gap: ${({ theme }) => theme.primaryGap}px; */
  /* align-items: center; */
`;

export const Person = styled.div`
  /* margin-left: auto; */
  /* margin-right: auto; */
`;

export const Name = styled.p`
  /* color: ${({ theme }) => theme.primaryFontColor}; */
  /* font-family: Inter; */
  /* font-size: 20px; */
  /* font-weight: ${({ theme }) => theme.secondaryFontWeight}; */
  /* text-align: center; */
`;

export const JobTitle = styled.p`
  /* color: #636363; */
  /* font-family: Inter; */
  /* font-size: ${({ theme }) => theme.primaryFontSize}px; */
  /* font-weight: ${({ theme }) => theme.primaryFontWeight}; */
  /* text-align: center; */
`;

export const Phone = styled.p`
  /* color: ${({ theme }) => theme.primaryFontColor}; */
  /* font-family: Inter; */
  /* font-size: ${({ theme }) => theme.secondaryFontSize}px; */
  /* font-weight: ${({ theme }) => theme.primaryFontWeight}; */
  /* margin-left: auto; */
  /* margin-right: auto; */
`;

export const Email = styled.p`
  /* color: #696969; */
  /* font-family: Inter; */
  /* font-size: ${({ theme }) => theme.secondaryFontSize}px; */
  /* font-weight: ${({ theme }) => theme.secondaryFontWeight}; */
  /* margin-left: auto; */
  /* margin-right: auto; */
`;
