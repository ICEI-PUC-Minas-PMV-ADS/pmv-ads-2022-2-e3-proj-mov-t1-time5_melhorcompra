# Arquitetura da Solução

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![solução drawio](https://user-images.githubusercontent.com/91202959/194591526-ce008694-2bad-4549-9c23-1c130ee8acff.png)
## Diagrama de Classes

Na engenharia de software, um diagrama de classes é um tipo de diagrama de estrutura estática que descreve a estrutura de um sistema mostrando as classes do sistema, seus atributos, operações e os relacionamentos entre os objetos.

No diagrama, as classes são representadas com caixas que contêm três compartimentos: O compartimento superior contém o nome da classe. É impresso em negrito e centralizado, e a primeira letra é maiúscula. O compartimento do meio contém os atributos da classe. Eles são alinhados à esquerda e a primeira letra é minúscula. O compartimento inferior contém as operações que a classe pode executar. Eles também são alinhados à esquerda e a primeira letra é minúscula. Uma classe com três compartimentos.No projeto de um sistema, várias classes são identificadas e agrupadas em um diagrama de classes que ajuda a determinar as relações estáticas entre elas. Na modelagem detalhada, as classes do projeto conceitual são frequentemente divididas em subclasses.

<img src="img/diagrama-de-classes-Melhor-compra.jpg" alt="Figura do diagrama de classes do projeto MelhorCompra">

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

Na figura abaixo é mostrado o Modelo Relacional(MR) desenvolvido na plataforma "XXXXX" para o projeto.

<img src="img/modelo-ER-Melhor-compra.jpg" alt="Figura do modelo ER do projeto MelhorCompra">

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.

Na figura abaixo é mostrado o Esquema Relacional(ER) desenvolvido no próprio banco de dados para o projeto.

<img src="img/modelo-esquema-relacional-Melhor-compra.jpg" alt="Figura do modelo Esquema relacional do projeto MelhorCompra">

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

As tecnologias utilizadas são Dashboard - Expo código, Oracle - SQL Developer, Oracle - Data Modeler, React Native, linguagens: HTML, CSS, JavaScript.

## Hospedagem

A hospedagem do projeto feita no "GitHub", a do banco de dados utiliza-se o "DBaver" e o banco de dados "SQlite".
> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

A medida que a tecnologia avança vem se tornando cada vez comum a priorização da qualidade de software, podendo determinar até o sucesso de um negócio.
Atualmente não basta apenas satisfazer o pedido do cliente para "desenvolver algo que funcione corretamente", mesmo que tenha sido altamente avaliado em termos de qualidade, mas nos últimos anos o nível de demanda do lado do cliente vem subindo, como por exemplo: "eu quero algo que não só funcione corretamente, mas que possa ser usado e satisfatório".

Por isso, para alcançar a qualidade que satisfaça os clientes, está se tornando cada vez mais importante analisar as expectativas desses diversos clientes, examinar os requisitos de qualidade que devem ser perseguidos e prosseguir com o desenvolvimento.
Existem diferentes expectativas de qualidade para cada stakeholder, as expectativas para os produtos diferem dependendo de cada posição, por isso é muito importante compreender firmemente que tipo de qualidade cada stakeholder está procurando.

Desta forma, as expectativas para a qualidade do software cobrem não apenas a funcionalidade, mas também a facilidade de uso, estabilidade e facilidade de operação e manutenção. Por essa razão, não é fácil identificar todas as demandas das partes interessadas e atender suas expectativas sem falhas.

Portanto, existem vários indicadores como um dos padrões de definição e organização de requisitos de qualidade tão diversos, mas desta vez apresentaremos o padrão internacional "ISO/IEC 25010:2011" para avaliar a qualidade do software. Este padrão classifica as características de qualidade do software nas seguintes oito categorias e 31 subcategorias presentes na imagem a seguir:


![image](https://user-images.githubusercontent.com/32153247/194778469-14e165d5-3364-4821-90b9-de6e79f2351a.png)
![image](https://user-images.githubusercontent.com/32153247/194778541-81720b32-cc0c-4454-a68b-369d215b946d.png)
![image](https://user-images.githubusercontent.com/32153247/194778612-76cb92ab-0ba5-4d07-aac3-fa1bba47ae51.png)
![image](https://user-images.githubusercontent.com/32153247/194778648-aae08a3f-0b6f-45ae-a661-af6f4b4e0de9.png)

Com base nessas características escolhemos algumas para focar no nosso projeto:

![image](https://user-images.githubusercontent.com/32153247/194778700-59d4ce4e-55b1-4dc3-a6e4-a28a66a52b9b.png)




