import { MovieComponent } from './movie/movie.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'movie/:id', component: MovieComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot( ROUTES );