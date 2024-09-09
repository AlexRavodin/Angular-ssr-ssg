import { Routes } from '@angular/router';
import {SsgSecondaryComponent} from "./ssg-secondary/ssg-secondary.component";
import {SsgMainComponent} from "./ssg-main/ssg-main.component";
import {SsrSecondaryComponent} from "./ssr-secondary/ssr-secondary.component";

export const routes: Routes = [
  { path: '', redirectTo: 'ssg-main', pathMatch: 'full' },
  { path: 'ssg-main', component: SsgMainComponent },
  { path: 'ssg-secondary', component: SsgSecondaryComponent },
  { path: 'ssr-secondary', component: SsrSecondaryComponent },
];

