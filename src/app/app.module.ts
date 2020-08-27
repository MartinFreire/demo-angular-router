import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementListComponent } from './element-list/element-list.component';
import { ElementViewComponent } from './element-view/element-view.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/element/list', pathMatch: 'full' },
  { path: 'element/list', component: ElementListComponent },
  { path: 'element/view', component: ElementViewComponent },
  // Not found
  { path: '**', redirectTo: '/element/list' }
];


@NgModule({
  declarations: [
    AppComponent,
    ElementListComponent,
    ElementViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
