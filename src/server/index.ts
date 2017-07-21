import * as Koa from 'koa';

const app = new Koa();

app.listen(8066, () => {
  console.log('Koa App Start At Azure!');
});
