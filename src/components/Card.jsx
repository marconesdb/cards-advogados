import React, { useState } from 'react';
import styled from 'styled-components';



const CardWrapper = styled.div`
  position: relative;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: calc(33.33% - 20px); /* Definindo a largura de cada card */
  overflow: hidden; /* Para garantir que a imagem não ultrapasse os limites do card */
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 65%;
  padding: 10px;
  background-color: black; /* Adiciona um fundo escuro translúcido */
  border-radius: 0px 10px 0px 0px;
`;

const CardContent2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: black; /* Adiciona um fundo escuro translúcido */
  border-radius: 0px 10px 0px 0px;
  padding: 5px 20px 45px 10px;
  margin-top: 50px;
`;

const Title = styled.h2`
  margin-top: 0;
  color: #fff; /* Define a cor do título como branco */
  font-size: 24px;
  margin-bottom: 55px;
  padding: 0px;
`;

const Content = styled.p`
  margin-top: 0;
  color: #fff; /* Define a cor do conteúdo como branco */
  font-size: 13px;
  opacity: ${props => (props.visible ? '1' : '0')}; /* Controla a visibilidade */
  transition: opacity 0.3s ease; /* Adiciona uma transição suave */
`;

const Paragrafo = styled.p`
  margin-top: 0;
  color: #fff; /* Define a cor do parágrafo como branco */
  font-size: 13px;
  padding-bottom: 30px;
  opacity: ${props => (props.visible ? '1' : '0')}; /* Controla a visibilidade */
  transition: opacity 0.3s ease; /* Adiciona uma transição suave */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo transparente */
  display: ${props => (props.hovering ? 'block' : 'none')}; /* Visível apenas quando hovering é verdadeiro */
`;

const TabText = styled.p`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 16px;
`;

const ReplacementText = styled.p`
  position: absolute;
  bottom: 10px;
  left: 30%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 16px;
`;
const Card = ({ title, content, paragrafo, image, tabMessage }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <CardWrapper onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <Image src={image} alt={title} />
      <CardContent>
        <Title>{title}</Title>
      </CardContent>
      <CardContent2>
        <Content visible={!hovering}>{content}</Content>
        <Paragrafo visible={!hovering}>{paragrafo}</Paragrafo>
      </CardContent2>
      <Overlay hovering={hovering}>
        <TabText>{tabMessage}</TabText>
        <ReplacementText>Texto substituto para conteúdo oculto</ReplacementText>
      </Overlay>
    </CardWrapper>
  );
};

export default Card;
