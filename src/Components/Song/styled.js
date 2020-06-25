import styled from 'styled-components';
/* Config */
import { colors } from 'config';

export const Container = styled.div`
  /* Display & Box Model */
`;

export const Artist = styled.div`
  /* Display & Box Model */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  width: 100%;
`;

export const SongName = styled.h1`
  /* Display & Box Model */
  margin-bottom: 0.5rem;
  /* Styling */
  color: ${colors.darkGray};
  /* Text */
  font-size: 2.2rem;
  font-weight: bold;
`;

export const ArtistName = styled.h2`
  /* Styling */
  color: ${colors.gray};
  /* Text */
  font-size: 1.5rem;
`;

export const Album = styled.img`
  /* Display & Box Model */
  border-radius: 50%;
  object-fit: cover;
  width: 22rem;
  border: 1rem solid ${colors.lightGray};
  margin-bottom: 2rem;
  /* Styling */
  box-shadow: 25px 25px 50px #c3cad6, -25px -25px 50px #ffffff;
`;
