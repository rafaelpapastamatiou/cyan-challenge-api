import { Router } from 'express';

import FilesController from '../controllers/FilesController';

const filesController = new FilesController();

const filesRouter = Router();

filesRouter.get('/', filesController.index);

filesRouter.post('/', filesController.store);

export default filesRouter;
