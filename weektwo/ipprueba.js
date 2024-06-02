

/*const API='https://api.pexels.com/v1/search?query=nature&per_page=1';
console.log("voy primero")
async function fetchApi(){
    const data = await fetch(API);
    const res =await data.json()
    console.log(res)
}

fetchApi()
console.log("voy segundo")*/



const { createClient } = require('pexels');

const client = createClient('ev8xjgEufiTkAii7jds58yYpXpxMoR71IxxSyivHBQKUozE25hxvLR9u');
const query = 'Nature';

client.photos.search({ query, per_page: 1 }).then(photos => {
    console.log(photos);
}).catch(error => {
    console.error(error);
});

