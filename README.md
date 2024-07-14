## Django React Posts

Exemplo básico de uma aplicação CRUD (Create, Read, Update, Delete) de posts, desenvolvida com o frontend em React e o backend em Django. Este projeto foi desenvolvido durante o curso rápido de React do Maximilian Schwarzmüller. A aplicação permite aos usuários criar, visualizar, editar e deletar posts.

### Tecnologias Utilizadas

- **Frontend:** Vite + React
- **Backend:** Django

### Funcionalidades

- **Criar Post:** Adicione novos posts com título e conteúdo.
- **Listar Posts:** Visualize a lista de todos os posts existentes.
- **Editar Post:** Atualize o título e o conteúdo dos posts.
- **Deletar Post:** Remova posts indesejados.

### Estrutura do Projeto

- **Frontend (React):** Interface de usuário interativa, construída com componentes reutilizáveis.
- **Backend (Django):** API RESTful para gerenciar operações de CRUD, com persistência de dados em um banco de dados.

### Como Executar o Projeto

1. **Backend:**
   - Navegue até o diretório do backend: `cd backend`
   - Crie e ative um ambiente virtual `python3 -m venv venv && source venv/bin/activate`
   - Instale as dependências: `pip install -r requirements.txt`
   - Execute as migrações: `python manage.py migrate`
   - Inicie o servidor: `python manage.py runserver`

2. **Frontend:**
   - Navegue até o diretório do frontend: `cd frontend`
   - Instale as dependências: `yarn`
   - Inicie o servidor de desenvolvimento: `yarn dev`
