import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from 'src/app/about-page/about-page/about-page.component';
import { MainPageComponent } from 'src/app/main-page/main-page/main-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}), NoopAnimationsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
