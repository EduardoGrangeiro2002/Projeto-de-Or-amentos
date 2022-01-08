import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../Error/AppError';
import { ICreateBudgetsDTO } from '../../dtos/ICreateBudgetsDTO';
import { RepositoryBudgets } from '../../repositories/implementations/RepositoryBudgets';

@injectable()
class createBudgetsUseCase {
  constructor(
    @inject('RepositoryBudgets')
    private repositoryBudget: RepositoryBudgets,
  ) {}

  async execute({
    client,
    cep,
    number,
    cnpj,
    status,
    parts,
    barCode,
  }: ICreateBudgetsDTO) {
    const BudgetAlreadyExists = this.repositoryBudget.findByBarCode(barCode);

    if (!BudgetAlreadyExists) {
      await this.repositoryBudget.createBudget({
        client,
        cep,
        number,
        cnpj,
        status,
        parts,
        barCode,
      });
      throw new AppError('Budget already Exists');
    }
  }
}

export { createBudgetsUseCase };
