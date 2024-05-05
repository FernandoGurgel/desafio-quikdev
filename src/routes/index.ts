import express from 'express';
import {sessionRouter} from "./Sessions.routes";

const routes = express.Router();

routes.use('/sessins', sessionRouter);
routes.use('/users', sessionRouter);
routes.use('/posts', sessionRouter);
routes.use('/comments', sessionRouter);
export default routes;