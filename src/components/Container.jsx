import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  margin-top: 20px;
  font-size: 36px;
  position: relative; /* Para posicionamento do gradiente */
  display: inline-block;
  padding-bottom: 20px; /* Espaçamento opcional para melhorar a aparência */
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 140%;
    height: 2px; /* Espessura do traço */
    background: linear-gradient(to right, #333 85%, Orange 85%); /* Gradiente com 95% cinza e 5% amarelo */
    
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top:60px; /* Espaçamento entre o traço e os cards*/
  margin-left:100px;
  margin-right:100px;
`;

const Container = ({ title, children }) => {
  return (
    <ContainerWrapper>
      <Title>{title}</Title>
      <CardsWrapper>{children}</CardsWrapper>
    </ContainerWrapper>
  );
};

export default Container;
