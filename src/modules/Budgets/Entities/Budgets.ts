import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('budgets')
class Budgets {
  @PrimaryColumn()
  id: string;

  @Column()
  cep: string;

  @Column()
  number: string;

  @Column()
  client: string;

  @Column()
  cnpj: string;

  @Column()
  parts: string;

  @Column()
  status: string;

  @Column()
  barCode: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Budgets };
