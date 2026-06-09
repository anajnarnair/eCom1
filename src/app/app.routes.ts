import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Product } from './pages/product/product';
import { ContentChild } from '@angular/core';
import { Contact } from './pages/contact/contact';
import { SinglePage } from './single-page/single-page';

export const routes: Routes = [
    {
    path:"",component: Home
    },
    {
        path:"about",component:About
    },
    {
        path:"product",component:Product
    },
    {
        path:"contact",component:Contact
    },
    {
        path:"single-page/:id",component:SinglePage

    }
];
