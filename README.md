# Projeto - Grao Direto
 
🍽️ MVP - Plataforma de Gastronomia

Este projeto é um MVP de uma plataforma de gastronomia, desenvolvido utilizando React no frontend e Node.js no backend. O sistema permite que os usuários façam login, visualizem uma lista de restaurantes e consultem detalhes do restaurante e seu cardápio.

📌 Tecnologias Utilizadas

Frontend (React)

⚛️ React + Vite

🎨 Tailwind CSS (para estilização)

🌍 React Router (para navegação)

🔒 JWT (para autenticação)

📡 Axios (para comunicação com a API)

Backend (Node.js + Express)

🚀 Node.js + Express

🛢️ MongoDB + Mongoose (para armazenamento de dados)

🔑 bcrypt (para criptografia de senha)

🔐 JSON Web Token (JWT para autenticação)

📡 CORS (para permitir requisições do frontend)

🛠️ Dotenv (para gerenciar variáveis de ambiente)

🛠 Como Rodar o Projeto

1️⃣ Clonar o Repositório

git clone https://github.com/seu-usuario/seu-repositorio.git

cd seu-repositorio

2️⃣ Configurar o Backend

2\.1 Entrar na pasta do backend e instalar as dependências

cd backend

npm install

2\.2 Criar o arquivo .env no diretório backend e adicionar as configurações:

MONGO\_URI=mongodb://127.0.0.1:27017/gastronomia

JWT\_SECRET=sua\_chave\_secreta

PORT=5000

2\.3 Iniciar o Banco de Dados (MongoDB)

Caso o MongoDB não esteja rodando, inicie-o manualmente:

mongod

Se necessário, especifique o caminho do banco de dados:

mongod --dbpath C:\data\db

2\.4 Popular o Banco de Dados com Dados Iniciais

node seed.js

2\.5 Rodar o Servidor Backend

npm run dev

O backend estará rodando em http://localhost:5000.

3️⃣ Configurar o Frontend

3\.1 Voltar para a pasta raiz e entrar no frontend

cd ../frontend

3\.2 Instalar as dependências

npm install

3\.3 Rodar o Frontend

npm run dev

O frontend estará rodando em http://localhost:5173.

🚀 Como Usar o Sistema

Acesse http://localhost:5173.

Faça login com as credenciais:

Email: fred@graodireto.com.br

Senha: 123Fred

Após o login, será exibida a lista de restaurantes.

Utilize a barra de pesquisa para filtrar os restaurantes pelo nome ou pratos.

Clique em um restaurante para visualizar os detalhes e o cardápio.

📌 Rotas da API

Autenticação

POST /api/auth/login → Faz login e retorna um token JWT.

Restaurantes

GET /api/restaurants → Lista todos os restaurantes.

GET /api/restaurants/:id → Retorna detalhes de um restaurante específico.

📜 Licença

Este projeto foi desenvolvido para fins educacionais e pode ser utilizado livremente.

Caso tenha dúvidas ou precise de suporte, entre em contato! 🚀