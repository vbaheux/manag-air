import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Vol } from '../../vols/entity/vol.entity';

@Entity('pilote')
export class Pilote {
  @PrimaryColumn('int')
  numpilote!: number;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  nompilote?: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  adresse?: string;

  @OneToMany(() => Vol, (vol) => vol.pilote)
  vols?: Vol[];
}
