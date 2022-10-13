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


na terminal executa o cmd npm run build-storybook

cria uma pasta chamada storybook-static, que é o bundle da aplicaçao

colocar   storybook-static no gitignore

### Tecnologías utilizadas

- Vite con react - biblioteca


  ### trazer informaçao do figma ao codigo

  importar tokens(estilos)
