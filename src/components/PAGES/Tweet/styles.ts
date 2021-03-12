import styled, { css } from 'styled-components';
 
import{ Chat, Favorite, Rocketseat } from '../../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);

  max-width: 100%;
  
`;

export const Retweeted  = styled.div`
  display: flex;
  align-items: center;
  font-weight: lighter;
  font-size: 13px;
  color: var(--gray);
  
`;
export const Body  = styled.div`
  display: flex;
  margin-top: 4px;
  position: relative;

`;
export const Avatar  = styled.div`
  width: 49px;
  height: 49px;
  background: var(--gray);
  flex-shrink: 0;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;

`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }
  > span, time {
    font-weight: lighter;
    color: var(--gray);
  }
  > strong, span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

  }
`;
export const Description = styled.p`
  font-size: 15px;
  margin-top: 3px;

`;
export const ImageContent = styled.div`
  margin-top: 10px;
  width: 100%;
  height: min(285px, max(175px, 41vw));
  border-radius: 14px;
  background: var(--outline);

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
 

`;
export const Icons = styled.div`
 display: flex;
 width: 100%; /** Mobile */
 justify-content: space-between;
 align-items: center;
 margin: 11px auto 0;
 flex-wrap: wrap;

 @media (min-width: 330px) {
   width: 63%;
 }

 > div {
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
 }

`;
export const Status = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  > svg {
    margin-right: 10px;
  }
  &:nth-child(1) {
    &, 
    > svg path {
      color: var(--gray);
    }
  }
  &:nth-child(2) {
    color: var(--retweet);
    > svg path {
    fill: var(--retweet) !important; 
    }
  }
  &:nth-child(3) {
    &,
    > svg path {
    color: var(--like) !important; 
    }
  }
`;
export const Dot = styled.div`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: var(--gray);
  margin: 0 10px;
`;
export const RocketseatIcon = styled(Rocketseat)`
  width: 16px;
  height: 16px;

  margin-left: 35px;
  margin-right: 9px;

  > path {
    fill: var(--gray);
  }
`;
export const CommentIcon = styled(Chat)`
  width: 24px;
  height: 22px;
`;
export const RetweetIcon = styled(Rocketseat)`
  width: 23px;
  height: 26px;
`;
export const LikeIcon = styled(Favorite)`
  width: 25px;
  height: 24px;
`;

// ______________________ Const Icons ______________________ \\

const iconCSS = css`
width: 20px;
height: 20px;
fill: var(--gray);
margin-right: 6px;

`;