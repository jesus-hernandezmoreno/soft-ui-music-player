import React from 'react';
/* Components */
import Player from 'Components/Player';
import Song from 'Components/Song';
import Controls from 'Components/Controls';
import Button from 'Components/Button';
/* Styled Components */
import { Container, Header, Title } from './styled';
/* Hooks */
import { useAudio } from 'hooks';

const url = require('assets/song.mp3');
const cover = require('assets/cover.jpg');

function Main() {
  const [playing, curTime, duration, setClickedTime, toggle] = useAudio(url);

  return (
    <Container>
      <Header>
        <Button small>
          <Button.Icon className="fas fa-arrow-left" />
        </Button>
        <Title>Playing Now</Title>
        <Button small>
          <Button.Icon className="fas fa-bars" />
        </Button>
      </Header>
      <Song album={cover} artist="Disclosure ft. Sam Smith" song="Latch" />
      <Player curTime={curTime} duration={duration} onTimeUpdate={time => setClickedTime(time)} />
      <Controls toggle={toggle} playing={playing} />
    </Container>
  );
}

export default Main;
