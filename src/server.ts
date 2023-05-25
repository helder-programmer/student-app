import express from 'express';
import methodOverride from 'method-override';

import router from './routes/students';
const app = express();


app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

app.use(express.json());
app.use(express.static('./src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(router);


app.listen(8000, () => {
    console.log('Servidor Rodando!');
});