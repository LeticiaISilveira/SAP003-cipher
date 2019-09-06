# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Experiência do usuário](#3-experiência-do-usuário)
* [4. Considerações técnicas](#4-considerações-técnicas)
* [5. Checklist](#5-checklist)

***

## 1. Prefácio

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do Projeto
Muitas pessoas têm dificuldade de memorizar suas senhas e preferem deixá-las salvas em seus periféricos, o que nem sempre é conveniente, principalmente se for para acesso a sites e aplicativos que gerenciam informações pessoais ou que possuem acesso a sua conta bancária. 

O projeto surge como alternativa, para que essas pessoas criem um repositório de senhas codificadas ou, se já possuem um repositório de senha, possam adicionar mais segurança, utilizando uma chave que somente ela e pessoas autorizadas possam ter acesso, e assim, consigam decifrá-las.  

O Caesar Cipher Codificação de Senhas, lê o texto inserido pelo usuário, lê a sua chave de deslocamento(offset), permite escolher entre cifrar e decifrar através de uma caixa de opções e, após o clique do botão "Enviar", apresenta o resultado na tela, apagando o texto original. A cifragem/decifragem, ocorre com letras de A à Z, considerando minúsculas e maiúsculas. 
  
  Acesse a interface através do (link https://leticiaisilveira.github.io/Caesar-Cipher/src/index.html)

## 3. Experiência do Usuário

O design do projeto é funcional, simples e intuitivo. O usuário pode observar o objetivo de forma clara, através do banner destacado. Ao passar com o mouse em cima da logo e título, consegue ler um breve resumo sobre a cifra de César. 
Foram utilizados ícones intuitivos para a opção de copiar e limpar.

![caeser-cipher](https://github.com/LeticiaISilveira/SAP003-cipher/blob/master/tela-Cypher.png)
## Usuário
Qualquer pessoa que queira acrescentar mais segurança às suas senhas por meio da codificação. 


### Interface do usuário (UI)

A interface deve permitir ao usuário:

* Eleger um _offset_ , positivo ou negativo, indicando quantas posições de deslocamento de caracteres quer que a cifra utilize.
* Inserir uma mensagem (texto) para ser cifrada.
* Ver o resultado da mensagem cifrada.
* Inserir uma mensagem (texto) para ser decifrada.
* Ver o resultado da mensagem decifrada.
* Copiar o texto cifrado/decifrado clicando no ícone "copy".
* Apagar o texto cifrado/decifrado clicando no ícone "vassoura".


## 4. Considerações técnicas

A lógica do projeto está implementada inteiramente em JavaScript(ES6).
Nesse projeto **NÃO** foi feito uso de bibliotecas ou frameworks, só vanilla
JavaScript.

Os testes unitários cubriram o mínimo de 70% dos _statements_, _functions_
e _lines_, e um mínimo de 50% de _branches_. O _boilerplate_ já contem o setup e
configurações necessárias para executar os testes assim como _code coverage_
para ver o nível de cobertura dos testes usando o comando `npm test`.

O _boilerplate_ inclui testes de exemplo, como ponto de partida.

Para começar esse projeto você terá que fazer um _fork_ e _clonar_ este
repositório que contém o _boilerplate_.

O _boilerplate_ contém uma estrutura de arquivos como ponto de partida assim
como toda a configuração de dependências e testes de exemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

O _boilerplate_ inclui tarefas que executam [eslint](https://eslint.org/) e
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar o `HTML` e
`JavaScript` com respeito a uma guia de estilos. Ambas tarefas são executadas
automaticamente antes de executar os testes quando usamos o comando `npm run
test`.

No caso do `JavaScript` estamos usando o `eslint` que está configurado no
arquivo `.eslintrc` que contem o mínimo de informação como versão do
JavaScript/ECMAScript, o ambiente (_browser_ nesse caso) e as [regras
recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).

Nas regras/guias de estilo usaremos das recomandações padrão tanto para o
`eslint` quanto `htmlhint`.


##  5. Checklist

Essa seção é para te ajudar a ter um controle do que você precisa completar.

### Parte Obrigatória

* [✔] `README.md` adicionar informação sobre o processo e decisões do desenho.
* [✔] `README.md` explicar claramente quem são os usuários e as suas relações
  com o produto.
* [✔] `README.md` explicar claramente como o produto soluciona os
  problemas/necessidades dos usuários.
* [✔] Usar VanillaJS.
* [✔] **Não** usar `this`.
* [✔] Implementar `cipher.encode`.
* [✔] Implementar `cipher.decode`.
* [✔] Passar o linter com a configuração definida.
* [✔] Passar as provas unitárias.
* [✔] Testes unitários cubrindo 70% dos _statements_, _functions_ e _lines_, e
  no mínimo 50% das _branches_.
* [✔] Interface que permita escolher o `offset` (chave de deslocamento) usava
  para cifrar/decifrar.
* [✔] Interface que permita escrever um texto para ser cifrado.
* [✔] Interface que mostre o resultado da cifra corretamente.
* [✔] Interface que permita escrever um texto para ser decifrado.
* [✔] Interface que mostre o resultado decifrado corretamente.

### Parte Opcional: "Hacker edition"

* [✔] Cifrar/decifrar minúsculas.
* [✔] Cifrar/decifrar _outros_ caractéres (espações, pontuação, `ç`, `á`, ...).
* [✔] Permitir usar `offset` negativo.
