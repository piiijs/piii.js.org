import React from 'react'
import CodePen from '../../CodePen'

import {
  Section,
  Container,
  Example,
  Content,
  Text,
  Title
} from './Informations.styled.js'

export default () => (
  <Section aria-labelledby='o-que-e-piii-js'>
    <Container>
      <Example>
        <CodePen
          penId='YBmPoM'
          penUser='theuves'
          penHeight={600}
          penTitle='Chat sem Palavrões (Piii.js)'
        />
      </Example>
      <Content>
        <Text>
          <Title id='o-que-e-piii-js'>O Que é Piii.js?</Title>
          <p>
            <b>Piii.js</b> é uma biblioteca JavaScript destinada a filtragem de
            palavras em um texto com foco principal
            às <a href='https://super.abril.com.br/ciencia/a-ciencia-do-palavrao/'>
            <b>palavras de baixo-calão</b></a> (conhecidas como "palavrões") da
            língua portuguesa.
          </p>
          <p>
            A ferramenta oferece uma série de opções para controlar e evitar
            que o usuário consiga burlar o filtro, escrevendo a frase de várias
            formas diferentes, por exemplo.
          </p>
          <p>
            As palavras que devem ser filtradas são distribuídas em um pacote
            separado dessa ferramenta, permitindo asssim, que o desenvolvedor
            tenha a possibilidade de criar seus próprios filtros, dependendo
            de suas necessidades.
          </p>
        </Text>
      </Content>
    </Container>
  </Section>
)