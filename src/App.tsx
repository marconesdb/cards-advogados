import React from 'react';
import Container from './components/Container.jsx';
import Card from './components/Card.jsx';

function App() {
  return (
    <div className="App">
      <Container title="Nossa Equipe">
        <Card
          title="Antonio Oliveira"
          content="Advogado"
          paragrafo="OAB/MG"
          image="../src/components/img_advogados/Antonio.png"
          tabMessage="Mensagem para Antonio"
        />
        <Card
          title="Felipe Oliveira"
          content="Advogado"
          paragrafo="OAB/MG"
          image="../src/components/img_advogados/Filipe - Copia.jpg"
          tabMessage="Mensagem para Felipe"
        />
        <Card
          title="Joyce Souza"
          content="Advogada"
          paragrafo="OAB/MG"
          image="../src/components/img_advogados/Joyce - Copia.jpg"
          tabMessage="Mensagem para Joyce"
        />
      </Container>
    </div>
  );
}

export default App;
