import 'reflect-metadata';
import express, {NextFunction, Request, Response} from 'express';
import cors from 'cors'
import 'express-async-errors';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerOutput from './config/swagger_output.json';
import {createConnection} from "typeorm";
import errorHandler from "./middlewares/errorHandler";

createConnection()
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerOutput));
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server started at port 3000');
});