import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfternoonComponent } from './afternoon/afternoon.component';
import { HomeComponent } from './home/home.component';
import { MidnightComponent } from './midnight/midnight.component';
import { MorningComponent } from './morning/morning.component';
import { NoonComponent } from './noon/noon.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'morning', component: MorningComponent },
  { path: 'noon', component: NoonComponent },
  { path: 'afternoon', component: AfternoonComponent },
  { path: 'midnight', component: MidnightComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
