import express from 'express';
import {sessionRouter} from "./Sessions.routes";
import usersRoutes from "./Users.routes";
import postsRouter from "./Post.routes";
import commentsRoutes from "./Comments.routes";
import reportRoutes from "./Report.routes";

const routes = express.Router();

routes.use('/auth', sessionRouter);
routes.use('/users', usersRoutes);
routes.use('/posts', postsRouter);
routes.use('/comments', commentsRoutes);
routes.use('/reports', reportRoutes);
export default routes;