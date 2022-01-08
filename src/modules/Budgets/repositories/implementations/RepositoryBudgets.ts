import { getRepository, Repository } from 'typeorm';

import { ICreateBudgetsDTO } from '../../dtos/ICreateBudgetsDTO';
import { Budgets } from '../../Entities/Budgets';
import { IRepositoryBudgetsInterface } from '../IRepositoryBudgets';

class RepositoryBudgets implements IRepositoryBudgetsInterface {
  private repository: Repository<Budgets>;

  constructor() {
    this.repository = getRepository(Budgets);
  }

  async createBudget({
    id,
    client,
    cnpj,
    number,
    cep,
    parts,
    status,
  }: ICreateBudgetsDTO): Promise<void> {
    const Budget = this.repository.create({
      id,
      client,
      cnpj,
      number,
      cep,
      status,
      parts,
    });
    await this.repository.save(Budget);
  }

  async findAllBudgetsByClient(client: string): Promise<Budgets[]> {
    return this.repository
      .createQueryBuilder('budgets')
      .where('budgets.client =:client', { client: `${client}` })
      .getMany();
  }
  findAllBudgetsByStatus(status: string): Promise<Budgets[]> {
    return this.repository
      .createQueryBuilder('budgets')
      .where('budgets.status =:status', { status: `${status}` })
      .getMany();
  }
  findByBarCode(barCode: string): Promise<Budgets> {
    return this.repository
      .createQueryBuilder('budgets')
      .where('budgets.barCode =:barCode', { barCode: `${barCode}` })
      .getOneOrFail();
  }
  listBudgets(): Promise<Budgets[]> {
    return this.repository.createQueryBuilder('budgets').getMany();
  }
}
export { RepositoryBudgets };
