import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WordEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({type: 'varchar', length: 250, unique: true})
  term: string;
  @Column({type: 'varchar', length: 250})
  translate: string;
  @CreateDateColumn({type: 'timestamp'})
  readonly createdAt?: Date;
}