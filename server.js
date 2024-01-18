const express = require('express')
const PORT = 3333;
const app = express();
const path = require('path')

// GET ROUTE - LISTENING FOR THE CLIENT TO VISIT LOCALHOST: 3333/TEST
app.get('/test', (requestObj, responseObj) => {
  responseObj.send('Hi from the server! I LOVE YOU VERY MUCH');
});

app.get('/', (requestObj, responseObj) => {
  responseObj.send('root visited')
});

app.get('/api/recipe', (requestObj, responseObj) => {
  responseObj.send({
    name: 'Hey man here is the name of the recipe Pizza',
    ingredients: ['cheese', 'sauce', 'bread']
  });
});

app.get('/page', (requestObj, responseObj) => {
  responseObj.sendFile(path.join(__dirname, './index.html'))
});

// FALLBACK
app.use((requestObj, responseObj) => {
  responseObj.sendFile(path.join(__dirname, './notfound.html'))
})

app.listen(PORT, () => {
  console.log('Server started on port', PORT)
});