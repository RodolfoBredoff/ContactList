# PUC Minas - Sistemas de Informação - Laboratorio de Sistemas de Informação

<p> Este repositório foi criado para um trabalho universitário sobre o framework Angular, no qual construímos um sistema de lista de contatos.

<p> O usuário pode favoritar, excluir, adicionar e visualizar seus contatos contemplando as ações de CRUD como solicitado.
  
  O Backend é foi desenvolvido em Spring Boot e utilizamos duas APIs como fonte:
  
  > https://randomuser.me : Para gerar usuários fictícios e aleatórios;
  
  > https://www.countryflags.io/ : Para obter as bandeiras dos países origem de cada contato ;

 > <a href="https://github.com/rodolfobredoff/ContactListBack" target="_blank">`Repositório Backend`</a> : Projeto em Spring

## Como rodar o projeto:

Para os passos a seguir é necessário a configuração prévia do Backend, se ainda não executou essa parte acesse o link do repositório acima e consulte o README do repositório.

 1 : Caso não tenha o Node Js instalado, acesse o <a href="https://nodejs.org/en/download/" target="_blank"> link </a> e faça o download apropriado para o seu SO.

 2 : Para a instalação do Angular CLI: `npm install -g @angular/cli`

 3 : Para clonar o projeto, entre no diretório desejado, abra o prompt de comando e execute : `git clone https://github.com/rodolfobredoff/ContactList.git`

 4 : Para instalar as dependencias do projeto, abra o prompt de comando no diretório que acabou de clonar e execute : `npm install -s`

 5 : Para subir o servidor local : `ng serve`

 6 : Para acessar a página : `http://localhost:4200`

 7 : Caso queira subir o projeto em outra porta: `ng serve --port "numeroDaPortaDesejada"`

 8 : Divirta-se :) ps: Quando abrir o projeto pela primeira vez sua lista de contatos estará vazia. Adicione novos contatos na opção "Adicionar Contatos"
