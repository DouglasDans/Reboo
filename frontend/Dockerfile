
FROM node:lts-alpine as development

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de dependências para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY . .

CMD ["npm", "run", "dev"]