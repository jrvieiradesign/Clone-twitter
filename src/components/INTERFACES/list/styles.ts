import styled from 'styled-components';


export const  Container = styled.div`
display: flex;
flex-direction: column;
background: var(--secondary);
border-radius: 14px;
`;

export const Item = styled.div`
padding: 10px 16px;
display: flex;

& + div {
  border-top: 1px solid var(--outline);
  display: flex;
}

&:first-child{
  padding-top: 13px;
  display: flex;
}

&:last-child{
  padding-bottom: 17px;
  display: flex;
  justify-content: space-between;
}

`;

export const Title = styled.strong`
font-weight: bold;
font-size: 19px;
`;






