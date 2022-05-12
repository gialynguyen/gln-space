import {
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
  BaseEntity as CoreBaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export abstract class BaseEntity extends CoreBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
