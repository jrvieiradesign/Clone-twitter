import styled, { css } from "styled-components";

import { LocationOn, Cake, } from'../../../styles/icons'
import Button from "../../BUTTONS/Button";

export const Container = styled.div`
display: flex;
flex-direction: column;

max-height: 100%;
overflow-y: auto;

scrollbar-width: none; /** Firefox */
 ::-webkit-scrollbar{
   display: none; /** Chrome */
 }
`;

export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  background: var(--twitter);
  height: min(33vw, 199px);

  position: relative;

`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid black;
  background: var(--gray);
  border-radius: 50%;

  position: absolute;

  bottom: max(-60px, -10vw);

  left: 15px;


`;
export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight:normal;
    font-size: 15px;

    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
    text-decoration: none;
    color: var(--twitter);
  }
  }

  > ul {
    list-style: none;
    margin: 10px 0px 10px 0px;
  
  > li {
    display: flex;
    align-items: center;
    font-size: 15px;
    color: var(--gray)
  }
  
  }
  
`;

const iconCSS = css`
width: 20px;
height: 20px;
fill: var(--gray);
margin-right: 6px;

`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;
export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;

  }
  }
`;

export const EditButton = styled(Button)`
    position: absolute;
    top: 2vw;
    right: 7px;
    
    padding: 4px 16px;

    font-size: 13px;

    
    @media (min-width: 320px) {
     top: 10px;
     padding: 10px 20px;
     font-size: 15px; 

    }
`;