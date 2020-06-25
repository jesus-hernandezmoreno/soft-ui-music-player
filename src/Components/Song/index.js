import React from 'react';
/* Styled Components */
import { Container, Artist, ArtistName, SongName, Album } from './styled';

const Song = ({ album, artist, song }) => {
  return (
    <Container>
      <Album src={album} />
      <Artist>
        <SongName>{song}</SongName>
        <ArtistName>{artist}</ArtistName>
      </Artist>
    </Container>
  );
};

export default Song;
