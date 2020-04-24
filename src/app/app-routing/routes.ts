import { Routes } from '@angular/router';

import { CatalogueComponent } from '../catalogue/catalogue.component';
import { BookDetailComponent } from '../bookdetail/bookdetail.component';
import { HomeComponent } from '../home/home.component';

import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'catalogue', component: CatalogueComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'contactus', component: ContactComponent },
    { path: 'bookdetail/:id', component: BookDetailComponent },
];