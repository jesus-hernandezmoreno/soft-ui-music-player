import React from 'react';
/* Styled Components */
import { Container, PhoneContainer, Content, Phone } from './styled';
/* Assets */
import phone from '../../assets/iphone_11.png';

const PhoneLayout = ({ children }) => {
  return (
    <Container>
      <PhoneContainer>
        <Phone src={phone} alt="Phone" />
        <Content>{children}</Content>
      </PhoneContainer>
    </Container>
  );
};

export default PhoneLayout;
