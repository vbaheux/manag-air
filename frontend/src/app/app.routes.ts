import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailPiloteComponent } from './pages/detail-pilote/detail-pilote.component';
import { DetailAvionComponent } from './pages/detail-avion/detail-avion.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: "Manag'Air - Accueil" },
  {
    path: 'pilotes/:id',
    component: DetailPiloteComponent,
    title: 'Détail du pilote',
  },
  {
    path: 'avions/:id',
    component: DetailAvionComponent,
    title: "Détail de l'avion",
  },
];
