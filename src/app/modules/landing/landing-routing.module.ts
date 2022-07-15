import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'nosotros', component: AboutUsComponent},
      {path: 'productos', component: ProductsComponent},
      {path: 'contacto', component: ContactComponent},

      { path: '**', redirectTo: '' }
    ]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
