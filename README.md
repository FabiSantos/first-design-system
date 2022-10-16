![](./src/img/...)

# Objetivos

- Crear projeto com Vite/React

- Crear StorieBook

- Trazer informaçao do Figma
  
- Publicar biblioteca storieBook

- instalar plugins: MDX, Tailwind css intellisense, PostCSS Language Support


configurar com Vite en la carpeta criada para o projeto

**npm create vite@latest**

Instalar as dependencias(utilizar a versao node lts atual)

**npm install**

Abrir com VS code
Limpar codigo que nao será utilizado


Ferramentas para estilo:
[https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

tailwindcss - preprocessador de css
postcss - bundle para css automatiza tarefas dentro do css
autoprefixer - prefixos para distintos navegadores

**npm i -D tailwindcss postcss autoprefixer**

**npx tailwindcss init -p**

no arquivo tailwind.config.cjs, configurar  a rota a ser usada, arquivos que tenham classes, neste caso qualquer uma

  content: [
    './src/**/*.tsx'
  ],

crear uma pata de estilos e um arquivo global.css

importar 3 conjuntos de estilos diretos do tailwind

@tailwind base;
@tailwind components;
@tailwind utilities;





Importar a fonte a ser usada em index.html:

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Roboto:wght@700&display=swap" rel="stylesheet"/>


no arquivo tailwind.config.cjs, configurar a font-family:
   extend: {
      fontFamily: {
        sans: 'Inter , sans-serif'
      },
    },
en inspecionar do chrome, en style/ computed pode verificar se está a fonte

***Nota: **extend = extender configuraçoes, substituir ou adicionar novas configuraçoes**
**já en theme:{} exemplo color, ao adicionar uma ou varias cores eliminas as preexistentes e só se pode usar as novas inseridas em theme.**


 theme: {
    fontSize:{
      'xs': 14,
      'sm': 16,
      'md': 18,
      'lg': 20,
      'xl': 24,
      '2xl': 32,
    },
    colors: {
      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-500': '#76768A',
      'gray-400': '#7C7C8A',
      'gray-300': '#C4C4CC',
      'gray-200': '#E1E1E6',
      'gray-100': '#F5F5F5',
      'cyan-500': '#81D8F7',
      'cyan-400': '#C9F1FF'
    },



### storybook ayuda a visualizar los componentes de la aplicación de forma isolada,
### documentaçao de componentes, facilita entender padroes, Design System

Configurar storieBook
**npx sb init --builder @storybook/builder-vite --use-npm**

pode perguntar se vc gostaria de mudar a versao de npm, escolher nao e instala igualmente

Compilar a pagina de storieBook:

**npm run storybook**


#### para mudar o tema da pagina:

na pasta .storybook

crear arquivo manager.js

import {addons} from '@storybook/addons'
import {themes} from '@storybook/theming'
addons.setConfig({
    theme: themes.dark
})


no arquivo preview.cjs

 docs:{
    theme: themes.dark,
  },

  [info](https://storybook.js.org/docs/react/configure/theming)



- importar no arquivo preview.cjs o css:

**import '../src/styles/global.css';**

- criar na pasta componets, os arquivos:

Text.tsx


Text.stories.tsx




#### clsx serve para criar variaçoes de classes no tailwind, permite aplicar clases de maneira condicional

npm install --save clsx
[Link](https://www.npmjs.com/package/clsx)
('https://www.npmjs.com/package/clsx')


no arquivo Text.js :

**import { clsx } from 'clsx'**

exemplo: classeName ={clsx({ foo:true }}



#### biblioteca de componentes nao estilizados, modal, checkbox, etc
npm install @radix-ui/react-slot

(https://www.radix-ui.com/docs/primitives/utilities/slot)


npm install @radix-ui/react-checkbox
(https://www.radix-ui.com/docs/primitives/components/checkbox)

#### biblioteca de icones
**npm install --save phosphor-react**
(https://github.com/phosphor-icons/phosphor-react)
(https://phosphoricons.com/)




### deploy de historybook com github pages

**npm i @storybook/storybook-deployer**
(https://www.npmjs.com/package/@storybook/storybook-deployer)


git init para vincular com o ghpages

colocar no arquivo package.json nos scripts:

**"deploy-storybook": "storybook-to-ghpages"**


na terminal executa o cmd npm run build-storybook

cria uma pasta chamada storybook-static, que é o bundle da aplicaçao

colocar   storybook-static no .gitignore


instalar o cli github, para acceder ao github desde a terminal

**brew install gh**(uma vez no computador)

depois seguir os passos:




fabiane@C02FP2F5ML7H design-system % gh auth login
? What account do you want to log into? GitHub.com
? What is your preferred protocol for Git operations? HTTPS
? Authenticate Git with your GitHub credentials? Yes
? How would you like to authenticate GitHub CLI? Login with a web browser

! First copy your one-time code: B907-D8F4
Press Enter to open github.com in your browser... 
✓ Authentication complete.
- gh config set -h github.com git_protocol https
✓ Configured git protocol
✓ Logged in as FabiSantos
fabiane@C02FP2F5ML7H design-system % **gh repo create**
? What would you like to do? Push an existing local repository to GitHub
? Path to local repository .
? Repository name first-design-system
? Description Primeiro projeto de design system com storybook
? Visibility Public
✓ Created repository FabiSantos/first-design-system on GitHub
? Add a remote? Yes
? What should the new remote be called? origin
✓ Added remote https://github.com/FabiSantos/first-design-system.git
fabiane@C02FP2F5ML7H design-system % git add .     
fabiane@C02FP2F5ML7H design-system % git commit -m "initial commit"

fabiane@C02FP2F5ML7H design-system % git push origin main
Enumerating objects: 42, done.
Counting objects: 100% (42/42), done.
Delta compression using up to 4 threads
Compressing objects: 100% (34/34), done.
Writing objects: 100% (42/42), 539.01 KiB | 3.79 MiB/s, done.
Total 42 (delta 5), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (5/5), done.
To https://github.com/FabiSantos/first-design-system.git
 * [new branch]      main -> main
fabiane@C02FP2F5ML7H design-system % **gh repo view -w** para abrir na web
Opening github.com/FabiSantos/first-design-system in your browser.


integraçao continua: dispara açoes cada vez que tem uma modificaçao no codigo
*ci/ cd*

toda vez que eu envie uma nova versao do meu codigo para o github, ele publique gh-pages

entrega continua deploy se auto atualiza


- criar pasta.github/workflows/deploydocs.yml
- 




- na pasta deploy-doc.yml:
- 

name: Deploy Storybook

//qdo quero executar workflow: toda vez que houver um push em main
on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest


//primer comando  - baixa a versao atualizada do nosso codigo
    steps:
      - name: Checkout
        uses: actions/checkout@v3

        // Instala la version de node no nosso ambiente

        // npm ci é igual npm i, para ambientes nao interativos, instala as dependencias do projecto, mas nao atualiza o packaje

        // comando build para atualizar storybook

        //deploy da build do storybook --ci para nao pedir confirmacao nenhuma


        //token do github automatica





### Tecnologías utilizadas

- Vite con react - biblioteca


  ### trazer informaçao do figma ao codigo

  importar tokens(estilos)
