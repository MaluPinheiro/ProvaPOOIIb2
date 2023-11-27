import express from 'express';
import MainRouter from './routes/MainRoute';
import UsuarioRouter from './routes/UsuarioRoute';

const app = express();
const port = 300

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.json());

app.use(MainRouter);
app.use(UsuarioRouter);


app.listen(port, function(){
    console.log("Servidor rodando na porta ${port}");
})