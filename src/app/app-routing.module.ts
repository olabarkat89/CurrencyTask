import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KWDComponent } from './Components/detailsCurrency/kwd/kwd.component';
import { EGPComponent } from './Components/detailsCurrency/egp/egp.component';
import { EURComponent } from './Components/detailsCurrency/eur/eur.component';
import { USDComponent } from './Components/detailsCurrency/usd/usd.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'KWD',component:KWDComponent},
  {path:'EGP',component:EGPComponent},
  {path:'EUR',component:EURComponent},
  {path:'USD',component:USDComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
