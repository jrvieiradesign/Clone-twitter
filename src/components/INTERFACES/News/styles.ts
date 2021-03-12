import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

   > span, strong {
    font-size: 14px;
   }
   > span{
     font-weight: lighter;
     color: var(--gray);
     margin-bottom: 3px;
   }

`;
