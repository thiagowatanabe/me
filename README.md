# Meu Portfólio Pessoal

![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue?logo=typescript)
![Material UI](https://img.shields.io/badge/Material%20UI-5.14.5-purple?logo=mui)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-green)

## 💻 Descrição

Este é um **site de portfólio pessoal** desenvolvido em **ReactJS com TypeScript e Material UI**, criado para exibir meus **projetos**, **experiências profissionais**, **cursos** e **artigos do Medium**.  
Suporta **multilíngue (Português/Inglês)**, **tema claro/escuro** e é totalmente responsivo.

---

## 🌟 Funcionalidades

- **Home**: Apresentação pessoal com foto e descrição.
- **Projetos**: Cards com título, descrição truncada (150 caracteres), linguagem, botão GitHub, altura uniforme.
- **Artigos**: Cards do Medium com thumbnail, título, descrição truncada, data e botão para ler.
- **Experiência Profissional**: Lista de experiências com datas, empresa e cargo.
- **Cursos**: Lista de cursos e certificados.
- **Menu lateral**: Navegação entre páginas.
- **Header e Footer**: Informações de contato e redes sociais.
- **Tradução**: Suporte a Português e Inglês.
- **Tema claro/escuro**: Alternável pelo usuário.

---

## 🛠 Tecnologias

- ReactJS + TypeScript
- Material UI v5
- React Router Dom
- i18next (tradução)
- GitHub Pages (deploy)
- Consumo de APIs externas: GitHub Repos e Medium RSS

---

## 📁 Estrutura

```
src/
├─ components/      # Cards, Header, Footer
├─ pages/           # Home, Projects, Articles, Courses, Experience
├─ theme/           # light.ts / dark.ts
├─ utils/           # getLocalizedText, formatDate
├─ data/            # JSON de projetos, cursos, experiências
├─ App.tsx
└─ index.tsx
```

---

## 🚀 Rodando localmente

```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
cd NOME_DO_REPOSITORIO
npm install
npm start
```

O site ficará em `http://localhost:3000`.

---

## 📦 Deploy no GitHub Pages

```bash
npm install --save gh-pages
```

Adicione no `package.json`:

```json
"homepage": "https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Execute o deploy:

```bash
npm run deploy
```

O site ficará disponível em: `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO`

---

## 🔗 Links úteis

- GitHub: [https://github.com/SEU_USUARIO](https://github.com/SEU_USUARIO)
- Medium: [https://medium.com/@SEU_USUARIO](https://medium.com/@SEU_USUARIO)

---

## 📸 Preview

![Home](./screenshots/home.png)  
![Projects](./screenshots/projects.png)  
![Articles](./screenshots/articles.png)

---

## 📝 Licença

MIT License
