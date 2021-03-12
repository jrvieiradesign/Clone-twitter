import styled, { css }from 'styled-components'; 

import{ Email,
        Favorite,
        Home,
        Rocketseat,
        Notifications,
        Person,
        ExitToApp,
        } from '../../../styles/icons';



export const Backside = styled.div`
        display: flex;
        align-items: center;
        /* justify-content: space-between; */
        `;

export const Photo = styled.div`
        width: 39px;
        height: 39px;
        flex-shrink: 0;
        border-radius: 50%;
        background: var(--gray);
        
        
        
        `;
export const UserProfile = styled.div`
        display: none;
    
         @media (min-width: 1280px) {
           padding-left: 10px;
           flex-direction: column;
           display: flex;
           font-size: 14px;
          
           >span {
           font-weight: lighter;
           color: var(--gray)
         }
         }
        `;
export const LogoutIcon = styled(ExitToApp)`
        display:none;

        @media (min-width: 1280px) {
          display: inline-block;
          width: 28px;
          height: 28px;
          display: flex;
          cursor: pointer;
          outline: 0;
          margin-left: 52px;

          &:hover {
            fill: var(--like);
          }
        }
        `;

export const Container = styled.div`
  display: none;
   @media (min-width: 500px) {
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     max-height: 100vh; 
     position: sticky;
     
     top: 0;
     left: 0;

     padding: 9px 19px 20px;
     overflow-y: auto;
   }
  
`;

export const  MenuButton = styled.button`
 display: flex;
 align-items: center;
 padding: 15px 0;
 flex-shrink: 0;
 cursor: pointer;
 border-radius: 100px;
 outline:0;

 > span {
   display: none;
 }

@media (min-width: 1280px) {
  padding: 12px 25px 12px 15px;
  > span {
    display: inline;
    font-weight: bold;
    font-size: 19px;
    margin-left: 15px;
  }
  &:hover {
    background: var(--twitter-dark-hover);
    > svg {
      fill: var(--twitter);
    }
    > span {
      color: var(--twitter);
    }
  }
  
}
& + button:last-child {
    margin-top: 33px;
    width: 40px;
    height: 40px;
    background: var(--twitter);
    &:hover{
      background: var(--twitter-light-hover);
    }
    > span {
      display: none;
    }
    
    @media (min-width: 1280px) {
      width: 230px;
      height: unset;
      
      > span {
        display: inline;
      }
    }
  }
  
  
  
`;

export const  Topside = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;

    > span {
      display: flex;
    }
  }
`;


//                      ICONS                       \\

const iconCSS = css`
flex-shrink:0;

width: 30px;
height: 30px;
color: var(--white);


`;

export const  Logo = styled(Rocketseat)`
 width: 41px;
 height: 41px;
 margin-bottom: 6px;
  @media (min-width: 1280px){
    margin-left: 15px;
  }
  > path {
    fill: var(--twitter);
  }
`;

export const  HomeIcon = styled(Home)`${iconCSS}`;

export const  BellIcon = styled(Notifications)`${iconCSS}`;

export const  EmailIcon = styled(Email)`${iconCSS}`;

export const  FavoriteIcon = styled(Favorite)`${iconCSS}`;

export const  ProfileIcon = styled(Person)`${iconCSS}`;

