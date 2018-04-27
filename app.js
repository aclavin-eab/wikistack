const express = require('express');
const morgan = require('morgan');
const app = express();
// const index = require('./views');
const layout = require('./views/layout.js')
const { Page, User } = require('./models');
const bodyparser = require('body-parser')

const PORT = 3000;

app.use(morgan('dev'));
app.use(bodyparser({extended: false}));
app.use(express.static(`${__dirname}./public`));

app.use('/wiki', require('./routes/wiki'));
app.use('/user', require('./routes/user'));

app.use('/', (req,res)=>{
    res.redirect('/wiki');
}); // line 4 already required;


app.listen(PORT, async ()=>{
    console.log(`listening on ${PORT}`)
    // try {
    //     await Page.sync();
    //     await User.sync();
    // } catch (error) {
    //     console.log(error);
    // };
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