import styled from 'styled-components';

import Button from '../../BUTTONS/Button';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  > div {
    display: flex;
    align-items: center;
    
    & + button:last-child {
    padding: 6px 17px;
  }
  }

  
`;

export const Avatar = styled.div`
width: 49px;
height: 49px;
border-radius: 25px;

background: var(--gray);

margin-right: 10px;
`;

export const Info = styled.div`
display: flex;
flex-direction: column;

 > strong, span{
   font-size: 14px;
 }
 > span {
   font-weight: lighter;
   color: gray;
 }
`;

export const FollowButton = styled(Button)`
padding: 6px 17px;
`;
