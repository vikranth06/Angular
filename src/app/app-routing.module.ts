import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path: 'HomePage', component: HomePageComponent},
  { path: '', component: AppComponent }
];


export const AppComponents: any = [
  AppComponent,
  HomePageComponent  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { 
  
}
