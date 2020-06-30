# TesteBiz

## Requisitos para iniciar o projeto

- npm (incluso com o Node.js https://nodejs.org/en/)

## Iniciando o Projeto

- Navegar até a pasta onde o projeto foi clonado e executar o comando `npm install` para instalar todas as dependências necessárias para execução do projeto.
- Após instalação, executar o comando `npm start`. O mesmo iniciará o projeto, apontando para a porta 2779 e deve abrir automaticamente uma nova aba no navegador padrão.

## Estrutura
- Deixei cada componente com uma responsabilidade específica Componentizando layout, login e homepage. 
- Criei uma pasta `_helpers` com os arquivos de constantes utilizadas no login e com os interceptors para receber o token de autenticação, interceptar e tratar erros e para modificação do header da requisição.
- A pasta `_models` contém classes atribuindo tipos às variáveis dos objetos vindos do back-end.
- A pasta `_services` contém as classes que realizam as requisições e recebem resposta do back-end.
- No componente de login, fiz uma validação com **regex** para identificar se o campo está preenchido com **CPF** ou **e-mail**, sendo que, não identificando um dos dois formatos, ele não realiza a requisição.
- Os dados do usuário ficam armazenados no local storage, para manter o login entre possíveis refreshs na página. Ao realizar o logout, o método limpa o local storage e encaminha o usuário de volta ao formulário de login.
- Os arquivos **index.ts** presentes em várias pastas exportam os arquivos presentes no mesmo diretório, para facilitar a importação onde for necessária.
