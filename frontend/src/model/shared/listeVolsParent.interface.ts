import { ListeVolsParentType } from '@model/shared/listeVolsParentType.enum';

export interface ListeVolsParent {
  type: ListeVolsParentType;
  id: number;
  nom?: string;
}
