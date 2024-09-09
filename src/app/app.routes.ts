import { Routes } from '@angular/router';
import {SsgSecondaryComponent} from "./ssg-secondary/ssg-secondary.component";
import {SsgMainComponent} from "./ssg-main/ssg-main.component";

export const routes: Routes = [
  { path: '', redirectTo: 'ssg-main', pathMatch: 'full' },
  { path: 'ssg-main', component: SsgMainComponent },
  { path: 'ssg-secondary', component: SsgSecondaryComponent },
];

/*
export const routes: Routes = [
  { path: '', redirectTo: '/main-ssg', pathMatch: 'full' },
  { path: 'main-ssg', component: MainSsgComponent },
  { path: 'secondary-ssg', component: SecondarySsgComponent },
  { path: 'secondary-ssr', component: SecondarySsrComponent },
];*/
