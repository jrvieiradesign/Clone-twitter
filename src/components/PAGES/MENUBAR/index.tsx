import React from 'react';

import Button from '../../BUTTONS/Button';

import { Container,
         Topside,
         Logo,
         MenuButton,
         HomeIcon,
         BellIcon,
         EmailIcon,
         FavoriteIcon,
         ProfileIcon,
         Backside,
         Photo,
         UserProfile,
         LogoutIcon,
          } from './style';

const MENUBAR: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon/>
           <span>Página Inicial</span>
        </MenuButton>
        <MenuButton>
          <BellIcon/>
           <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon/>
           <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon/>
           <span>Favoritos</span>
        </MenuButton>
        <MenuButton className="active">
          <ProfileIcon/>
           <span>Perfil</span>
        </MenuButton>
        <Button outlined><span>Tweetar</span></Button>

        
      
      </ Topside>

      <Backside>
          <Photo />
          <UserProfile>  
          <strong>Junior Vieira</strong>
          <span>@jrvieiradesign</span>
          </ UserProfile>
          <LogoutIcon />
        </Backside>
    </ Container>
  );
}

export default MENUBAR;