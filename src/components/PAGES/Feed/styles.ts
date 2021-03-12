import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;  
`;

export const Tab = styled.div`
 margin-top: 10px;
 padding: 10px 0 15px;

 font-weight: bold;
 color: var(--twitter);
 font-size: 15px;
 text-align: center;
 border-bottom: 2px solid var(--twitter);

 outline: 0;
 cursor: pointer;

 &:hover {
   background: var(--twitter-dark-hover);
 }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
   

`;
