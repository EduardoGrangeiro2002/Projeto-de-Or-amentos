import { Router } from 'express';

import { CreateBudgetsController } from '../modules/Budgets/UseCases/createBudgets/createBudgetsController';

const budgetsRoutes = Router();

const CreateBudgetsControler = new CreateBudgetsController();

budgetsRoutes.post('/', CreateBudgetsControler.handle);

export { budgetsRoutes };
