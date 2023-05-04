import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravellerDetailFormComponent } from './traveller-detail-form/traveller-detail-form.component';
import { TravelOptionsListComponent } from './travel-options-list/travel-options-list.component';

const routes: Routes = [
  { path: 'traveller-details', component: TravellerDetailFormComponent },
  { path: 'travel-options', component: TravelOptionsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
