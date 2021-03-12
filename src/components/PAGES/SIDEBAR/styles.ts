import styled from "styled-components";

import { Search } from '../../../styles/icons';

export const Container = styled.div`
display: none;

@media (min-width: 1000px) {
  display: flex;
  flex-direction: column;
  /* padding: 10px 25px 0; */
  width: min(399px, 100%);
      

  
  /* overflow-y: auto; */
  /* background: white; */
  


}
`;


export const SearchWrapper = styled.div`

  display: flex;
  width: min(399px, 100%);
  max-height: 64px;
  position: fixed;
  top: 0;
  z-index: 2;
  background: var(--primary);
  padding: 10px 24px;
  
  


`;
export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  background: var(--search);
  border-radius: 19.5px;

  padding: 0 10px 0 15px;

  outline: 0;

  &::placeholder {
  font-size: 14px;
  color: var(--gray);
  }

  &:focus {
    border: 1px solid var(--twitter);
  }

  
  /* ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;

    transition: 180ms ease-in-out;
  } */
`;

export const SearchIcon = styled(Search)`
  display: none;
  /* width: 25px;
  width: 25px;
  fill: var(--gray);
  position: absolute;
  top: 0;
  left: 0; */
`;
export const Body = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 3px;
 padding: 67px 24px 200px;
 > p {
   font-size: 14px;
   
   }
 > div + div {
   margin-top: 15px;
 }



`;