import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors()); //Essa linha precisou ser colocada antes da abaixo. Ocorria erro de autorização do CORS. De acordo com a comunidade, ela precisa ser executada antes
                 //pois ela autoriza URL externa a consumir a API.
app.use(express.json()); //Converte request.body para JSON
app.use(routes);


//localhost:3333
//Aplicação espera por requisições HTTP
app.listen(3333);
