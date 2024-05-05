import {Request, Response, Router} from 'express';
import GetPostsToReportService from "../services/report/GetPostsToReportService";

export const reportsRouter = Router();

reportsRouter.get('/', async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Reports']
     */
    const service = new GetPostsToReportService();
    const response = await service.execute();

    return res.json(response);
});

export default reportsRouter;