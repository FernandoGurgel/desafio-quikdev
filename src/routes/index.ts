import express from 'express';
import {sessionRouter} from "./Sessions.routes";
import usersRoutes from "./Users.routes";

const routes = express.Router();

routes.use('/auth', sessionRouter);
routes.use('/users', usersRoutes);
// routes.use('/posts', sessionRouter);
// routes.use('/comments', sessionRouter);
export default routes;