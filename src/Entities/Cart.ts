import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Carts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  price!: number;

  @Column()
  image!: string;

  @Column() 
  soluong! : number ;

  @Column()
  total! : number ;
}
