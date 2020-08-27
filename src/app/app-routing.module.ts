import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact-us',
    loadChildren: () => import('src/app/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: 'about',
    loadChildren: () => import('src/app/about-us/about-us.module').then(m => m.AboutUsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
