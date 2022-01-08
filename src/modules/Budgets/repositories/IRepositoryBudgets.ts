import { ICreateBudgetsDTO } from '../dtos/ICreateBudgetsDTO';
import { Budgets } from '../Entities/Budgets';

interface IRepositoryBudgetsInterface {
  createBudget(data: ICreateBudgetsDTO): Promise<void>;

  findAllBudgetsByClient(client: string): Promise<Budgets[]>;

  findAllBudgetsByStatus(status: string): Promise<Budgets[]>;

  findByBarCode(barCode: string): Promise<Budgets>;

  listBudgets(): Promise<Budgets[]>;
}

export { IRepositoryBudgetsInterface };
