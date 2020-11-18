import { Router } from 'express';

import filesRoutes from '@modules/geographicPoints/infra/http/routes/files.routes';

import geographicPointsRoutes from '@modules/geographicPoints/infra/http/routes/geographicPoints.routes';

const routes = Router();

routes.use('/files', filesRoutes);

routes.use('/points', geographicPointsRoutes);

export default routes;
