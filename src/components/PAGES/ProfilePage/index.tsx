import React from 'react';

import { 
  Container, 
  Banner,
  Avatar, 
  ProfileData, 
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
   } from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </ Banner>

{/*______________________________________________________________*/}

      <ProfileData>
        <EditButton outlined>Editar Perfil</ EditButton>

{/*______________________________________________________________*/}

        <h1>Júnior Vieira Design</h1>
        <h2>@jrvieiradesign</h2>

{/*______________________________________________________________*/}        

        <p>
          Developer at <a href="http://www.google.com.br">@Google</a>
        </p>
      
{/*______________________________________________________________*/}    

        <ul>
          <li>
            <LocationIcon />
            Santa Catarina, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 05 de outubro de 1998
          </li>
        </ul>

{/*______________________________________________________________*/}    

        <Followage >
          <span>
            Seguindo <strong>12</strong>
          </span>
          <span>
            <strong>5000 </strong> Seguidores 
          </span>
        </Followage>
      
      </ ProfileData>

      <Feed />
    </ Container>


  );
}

export default ProfilePage;