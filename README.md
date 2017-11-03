# Lista de tarefas - ReactJS, Redux e Webpack

Projeto feito para o **Desafio** da **iClinic**.
Lista de tarefas com opções de ordenação no topo, opções de filtragem no rodapé, botão para excluir a tarefa e também botão para marcar atividade com concluída.
Para marcar algo como concluído basta clicar sobre o Componente, ficando dessa maneira:
~~Comprar pão no mercado.~~

**Demo:** [ver - GitHub Pages](https://mauriciord.github.io/lista-tarefas-react/)

## Desafio

![Desafio](https://i.imgur.com/61Dqd7B.png)

---

Uso de:
- _`ReactJS`_
- _`Redux`_
- _`Webpack`_ (Config: Common para configurações tanto em _Dev_ quanto em _Prod_)

## Scripts

- `yarn dev (ou npm run dev)`: Inicia em ambiente _dev_
- `yarn deploy (ou npm run deploy)`: Faz um _Build_ no projeto para produção e depois envia para Github Pages
- `yarn test (ou npm test)`: Roda o teste uma vez
- `yarn test:watch (ou npm run test:watch)`: Roda o teste no modo _watch_
- `yarn build (ou npm run build)`: Faz um _Build_ no projeto para produção
- `yarn build:analyzer (ou npm run build:analyzer)`: Faz um _Build_ no projeto para produção e abre o _bundle analyzer_ na porta `8888` 
- `yarn storybook (ou npm run storybook)`: Roda o Storybook na porta `6006`
- `yarn storybook:build`: Roda o Storybook para arquivos estáticos
- `yarn update-packages`: Atualiza os pacotes/libs para as últimas versões
- `yarn start (ou npm start)`: Mesmo que `yarn dev`
