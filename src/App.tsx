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
          tabMessage="Com uma longa trajetória na Advocacia, o advogado Antônio Oliveira atua no Direito Constitucional, Público e Empresarial. É fundador do Escritorio."
          replacementMessage="Direito Constitucional, Público e Empresarial"
        />
        <Card
          title="Felipe Oliveira"
          content="Advogado"
          paragrafo="OAB/MG"
          image="../src/components/img_advogados/Filipe - Copia.jpg"
          tabMessage="Com uma trajetória profisisonal marcada pela dedicação e excelência, o advogado Filipe Oliveira, destaca-se por sua especialização nas áreas ligadas ao Direito Civil. Sua atuação como advogado e consultor nas áreas de responsabilidade civil, sucessões e família é amplamente reconhecida."
          replacementMessage="Direito civil, sucessões e família"
        />
        <Card
          title="Joyce Souza"
          content="Advogada"
          paragrafo="OAB/MG"
          image="../src/components/img_advogados/Joyce - Copia.jpg"
          tabMessage="A advogada Joyce Souza, destaca-se pela brilhante carreira acadêmica sendo referência como parecerista. Atua em Direito Administrativo e Internacional."
          replacementMessage="Direito Administrativo e Internacional"
        />
      </Container>
    </div>
  );
}

export default App;
