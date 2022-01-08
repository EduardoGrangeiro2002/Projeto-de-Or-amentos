import { Router } from 'express';

import { budgetsRoutes } from './budgets.routes';

const router = Router();

router.use('budgets', budgetsRoutes);

export { router };
