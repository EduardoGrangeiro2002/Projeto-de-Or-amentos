import { container } from 'tsyringe';

import { RepositoryBudgets } from '../../modules/Budgets/repositories/implementations/RepositoryBudgets';
import { IRepositoryBudgetsInterface } from '../../modules/Budgets/repositories/IRepositoryBudgets';

container.registerSingleton<IRepositoryBudgetsInterface>(
  'RepositoryBudgets',
  RepositoryBudgets,
);
