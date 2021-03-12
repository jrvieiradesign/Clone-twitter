import React from 'react';

import { Container } from './styles';

interface Props {
  assunto: string;
  description: string;
  
}

const News: React.FC<Props> = ({
  assunto, description
}) => {
  return (
  <Container>

  <span>{assunto}</span>
  <strong>{description}</strong>

  </ Container>
    );
}

export default News;