# The Movies API

## Sobre

Projeto utiliza a api do The Movies DB para realizar a conexão, é necessário possuir uma conta no The Movies.

## Como rodar

Instale as dependencias node:

```bash
npm install
```

Inicie o projeto:

```bash
npm start
```

No arquivo `src/context/auth.js`, faça a seguinte alteração na linha 64:

```js
const callback = 'exp://192.168.153.205:19000/--/app/approved'

// Troque o exp://192.168.153.205:19000
// para o IP disponivel pelo expo
```

Essa alteração acabou sendo necessária, pois o DeepLink não funciona de forma esperada em desenvolvimento.

Em produção ele seria trocado por:

```js
const callback = 'themovies://app/approved'

// Troque o exp://192.168.153.205:19000
// para o IP disponivel pelo expo
```
