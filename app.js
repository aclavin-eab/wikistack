const express = require('express');
const morgan = require('morgan');
// const index = require('./views');
const layout = require('./views/layout.js')
const { Page, User } = require('./models');
const body = require('body-parser');
const app = express();

const PORT = 3000;

app.use(morgan('dev'));
app.use(express.static(`${__dirname}./public`));
app.use(body.urlencoded());

app.use('/wiki', require('./routes/wiki'));
app.use('/user', require('./routes/user'));

app.get('/', (req,res)=>{
    res.redirect('/wiki');
}) // line 4 already required;


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});
//trying to immatate .then promise in async await syntax
// (async function(){
//     try{
//         const dbUsage = await db.authenticate();
//         console.log('connected to the dataase');
//     } catch(error){
//         console.log(error);
//     }
// })();

// db.authenticate().then(() => {
//   console.log('connected to the database');
// });