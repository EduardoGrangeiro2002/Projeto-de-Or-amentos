import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { createBudgetsUseCase } from './createBudgetsUseCase';

class createBudgetsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { client, cnpj, cep, number, parts, status, barCode } = request.body;

    const CreateBudgetsUseCase = container.resolve(createBudgetsUseCase);

    await CreateBudgetsUseCase.execute({
      client,
      cnpj,
      cep,
      number,
      parts,
      status,
      barCode,
    });

    return response.status(201).send();
  }
}

export { createBudgetsController };
