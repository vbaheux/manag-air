import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Vol } from '../../vols/entity/vol.entity';

export enum Capacite {
  C140 = 140,
  C180 = 180,
  C200 = 200,
  C250 = 250,
  C300 = 300,
  C320 = 320,
  C360 = 360,
  C380 = 380,
  C450 = 450,
  C460 = 460,
}

@Entity('avion')
export class Avion {
  @PrimaryColumn('int')
  numavion!: number;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  nomavion?: string;

  @Column({
    type: 'enum',
    enum: Capacite,
  })
  capacite!: Capacite;

  @Column({
    type: 'varchar',
    length: 20,
    default: 'Paris',
  })
  localisation!: string;

  @OneToMany(() => Vol, (vol) => vol.avion)
  vols?: Vol[];
}
