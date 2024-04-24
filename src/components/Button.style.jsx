import React from 'react';
import styled from 'styled-components';

// Estilizando o botão usando styled-components
const Button = styled.button`
  background-color: #4CAF50; /* Cor de fundo verde */
  border: none;
  color: white; /* Cor do texto branco */
  padding: 15px 32px; /* Espaçamento interno */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px; /* Borda arredondada */
  &:hover {background-color: #614caf}
`;

// Componente do botão
function MyButton() {
  return (
    <Button>
      Meu Botão
    </Button>
  );
}

export default MyButton;
