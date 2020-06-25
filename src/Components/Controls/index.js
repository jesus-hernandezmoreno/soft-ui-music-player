import React from 'react';
/* Components */
import Button from '../Button';
/* Styled Components */
import { Container } from './styled';

const Controls = ({ toggle, playing }) => {
  return (
    <Container>
      <Button>
        <Button.Icon className="fas fa-backward" />
      </Button>
      <Button onClick={toggle} highlight>
        <Button.Icon className={playing ? 'fas fa-pause' : 'fas fa-play'} />
      </Button>
      <Button>
        <Button.Icon className="fas fa-forward" />
      </Button>
    </Container>
  );
};

export default Controls;
