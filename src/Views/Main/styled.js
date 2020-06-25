import styled from 'styled-components';
/* Config */
import { colors, device } from 'config';

// 3rem 5rem
export const Container = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem;
  height: 100%;
  /* Styling */
  background: ${colors.lightGray};
  border-radius: 2.5rem;
  /* Laptop/Desktop devices */
  @media ${device.laptop} {
    /* Display & Box Model */
    padding: 4rem 2rem;
  }
`;

export const Header = styled.div`
  /* Display & Box Model */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h1`
  /* Styling */
  color: ${colors.darkGray};
  /* Text */
  font-size: 1.3rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Icon = styled.i`
  /* Styling */
  color: inherit;
  /* Text */
  font-size: 1.5rem;
`;
