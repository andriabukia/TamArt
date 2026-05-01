import { Routes } from '@angular/router';
import { HomePage } from './Components/home-page/home-page';
import { Artwork } from './Components/artwork/artwork';

export const routes: Routes = [
    {path: '', component:HomePage},
    {path:'artwork', component:Artwork}
];
