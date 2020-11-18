import { Router } from 'express';

import GeographicPointsController from '../controllers/GeographicPointsController';

const geographicPointsController = new GeographicPointsController();

const geoPointsRouter = Router();

geoPointsRouter.get('/:fileId', geographicPointsController.index);

export default geoPointsRouter;
