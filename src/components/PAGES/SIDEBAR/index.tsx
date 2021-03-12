import React from 'react';
import StickyBox from 'react-sticky-box';
import List from '../../INTERFACES/list';
import FollowSugestion from '../../INTERFACES/FollowSugestion';
import News from '../../INTERFACES/News';

import { Container,
         SearchWrapper,
         SearchInput,
         SearchIcon,
         Body,
         } from './styles';

const SIDEBAR: React.FC = () => {
  return (
  <Container>
    <SearchWrapper>
      <SearchInput placeholder="Buscar no twitter"/>
      <SearchIcon />
    </SearchWrapper>

    <StickyBox>
    <Body>
      <List
      title="Talvez você curta"
      elements={[
        <FollowSugestion 
        name="Felipe Machado"
        nickname="felipe-machd@gmail.com"
        />,
        <FollowSugestion 
        name="Luisa Gradiente"
        nickname="Luisagradient@gmail.com"
        />,
        <FollowSugestion 
        name="Maria Laura Torres"
        nickname="marialauratorres@gmail.com"
        />,
      ]}

      />

<List
      title="Oque está acontecendo"
      elements={[
        <News
        assunto="Assuntos do momento no Brazil"
        description="Bootcamp da Rocketseat"
        />,
        <News
        assunto="Assuntos do momento no Brazil"
        description="Bootcamp da Rocketseat"
        />,
        <News
        assunto="Assuntos do momento no Brazil"
        description="Bootcamp da Rocketseat"
        />,
      ]}

      />
<List
      title="Oque está acontecendo"
      elements={[
        <News
        assunto="Assuntos do momento no Brazil"
        description="Bootcamp da Rocketseat"
        />,
        <News
        assunto="Assuntos do momento no Brazil"
        description="Bootcamp da Rocketseat"
        />,
        <News
        assunto="Assuntos do momento no Brazil"
        description="Bootcamp da Rocketseat"
        />,
      ]}

      />
<List
      title="Oque está acontecendo"
      elements={[
        <News
        assunto="Assuntos do momento no Brazil"
        description="Bootcamp da Rocketseat"
        />,
        <News
        assunto="Assuntos do momento no Brazil"
        description="Bootcamp da Rocketseat"
        />,
        <News
        assunto="Assuntos do momento no Brazil"
        description="Bootcamp da Rocketseat"
        />,
      ]}

      />
<List
      title="Oque está acontecendo"
      elements={[
        <News
        assunto="Assuntos do momento no Brazil"
        description="Bootcamp da Rocketseat"
        />,
        <News
        assunto="Assuntos do momento no Brazil"
        description="Bootcamp da Rocketseat"
        />,
        <News
        assunto="Assuntos do momento no Brazil"
        description="Bootcamp da Rocketseat"
        />,
      ]}

      />

    </Body>
    </StickyBox>
  </Container>
    );
}

export default SIDEBAR;