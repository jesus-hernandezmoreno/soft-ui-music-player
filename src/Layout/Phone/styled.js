import styled from 'styled-components';

export const Container = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 100vw;
  min-height: 100vh;

  background: #d3e1f7;
`;

export const PhoneContainer = styled.div`
  /* Position */
  position: relative;
  /* Display & Box Model */
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

export const Content = styled.div`
  /* Position */
  position: absolute;
  top: 6rem;
  /* Display & Box Model */
  height: 86%;
  width: 80%;
`;

export const Phone = styled.img`
  /* Display & Box Model */
  width: 37.5rem;
`;
