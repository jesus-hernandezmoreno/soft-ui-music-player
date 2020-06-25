import styled from 'styled-components';
/* Config */
import { colors } from 'config';

export const Duration = styled.div`
  /* Display & Box Model */
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Start = styled.p`
  /* Styling */
  color: ${colors.gray};
  /* Text */
  font-size: 1.2rem;
`;

export const End = styled.p`
  /* Styling */
  color: ${colors.gray};
  /* Text */
  font-size: 1.2rem;
`;

export const Bar = styled.div`
  /* Display & Box Model */
  user-select: none;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

export const BarProgress = styled.div`
  /* Display & Box Model */
  flex: 1;
  border-radius: 0.5rem;
  height: 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const BarKnob = styled.span`
  /* Display & Box Model */
  position: relative;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: #7796ff;
  border: 0.7rem solid #eef8ff;
`;
