import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Pilote } from '../../pilotes/entity/pilote.entity';
import { Avion } from '../../avions/entity/avion.entity';

@Entity('vol')
export class Vol {
  @PrimaryColumn({
    type: 'varchar',
    length: 6,
  })
  numvol!: string;

  @Column('int')
  numpilote: number;

  @Column('int')
  numavion: number;

  @ManyToOne(() => Pilote, (pilote) => pilote.vols, { nullable: false })
  @JoinColumn({ name: 'numpilote' })
  pilote!: Pilote;

  @ManyToOne(() => Avion, (avion) => avion.vols, { nullable: false })
  @JoinColumn({ name: 'numavion' })
  avion!: Avion;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  villedep?: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  villearr?: string;

  @Column({
    type: 'varchar',
    length: 5,
    nullable: true,
  })
  heuredep?: string;

  @Column({
    type: 'varchar',
    length: 5,
    nullable: true,
  })
  heurearr?: string;
}
