import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./component/feature/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./component/feature/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./component/feature/products/products.component').then(
        (m) => m.ProductsComponent
      ),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./component/feature/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./component/feature/testimonials/testimonials.component').then(
        (m) => m.TestimonialsComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./component/feature/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import(
        './component/feature/page-not-found/page-not-found.component'
      ).then((m) => m.PageNotFoundComponent),
  },
];
