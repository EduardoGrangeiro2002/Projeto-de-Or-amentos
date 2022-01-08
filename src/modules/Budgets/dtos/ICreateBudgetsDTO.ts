interface ICreateBudgetsDTO {
  cep: string;

  number: string;

  client: string;

  cnpj: string;

  parts: string[];

  status: string;

  barCode: number;

  id?: string;
}

export { ICreateBudgetsDTO };
