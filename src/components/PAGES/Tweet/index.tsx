import React from 'react';
// import { Header } from '../Main/styles';

import { Container, 
         Retweeted, 
         Body, 
         Avatar, 
         Content,
         Header,
         Description,
         ImageContent,
         Icons,
         Status,
        //  Icons  \\
         Dot,
         RocketseatIcon,
         CommentIcon,
         RetweetIcon,
         LikeIcon, } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Junior Vieira</strong>
            <span>@jrvieiradesign</span>
            <Dot />
            <time>06 de mar</time>
            </ Header>

            <Description>Foguete não tem ré</ Description>

            <ImageContent />

            <Icons>
              <Status>
                <CommentIcon />
                18
                </ Status>
              <Status>
                <RetweetIcon />
                18
                </ Status>
              <Status>
                <LikeIcon />
                999
                </ Status >
            </ Icons>

          
        </ Content>
      </ Body>
    </ Container>
  );
}

export default Tweet;