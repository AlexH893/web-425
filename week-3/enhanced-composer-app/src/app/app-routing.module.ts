import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

//Routes array containing navigation to different pages
const routes: Routes = [
  {
    path: '',
    redirectTo: '/composer-list',
    /*The path-match strategy 'full' matches against the entire URL. It is important
    * to do this when redirecting empty-path routes. Otherwise, because an empty path is
    * a prefix of any URL, the router would apply the redirect even when navigating to the
    * redirect destination, creating an endless loop.
    */
    pathMatch: 'full'
  },
  {
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//Exporting the class to use elsewhere
export class AppRoutingModule { }
