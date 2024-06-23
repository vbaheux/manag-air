import { IsInt, IsString, Matches, MaxLength } from 'class-validator';

export class ICreateVolDto {
  @IsString()
  @Matches(/^[A-Z]{2}\d{4}$/)
  readonly id!: string;

  @IsString()
  @MaxLength(20)
  readonly villeDepart: string;

  @IsString()
  @MaxLength(20)
  readonly villeArrivee: string;

  @IsString()
  @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
  readonly heureDepart: string;

  @IsString()
  @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
  readonly heureArrivee: string;

  @IsInt()
  readonly piloteId: number;

  @IsInt()
  readonly avionId: number;
}
