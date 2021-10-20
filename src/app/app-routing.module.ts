import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/Waiter/post-list/post-list.component';
import { PostFormComponent } from './components/Waiter/post-form/post-form.component';
import { TableListComponent } from './components/Table/table-list/table-list.component';
import { TableFormComponent } from './components/Table/table-form/table-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'waiterList', component: PostListComponent },
  { path: 'waiterForm', component: PostFormComponent },
  { path: 'form/:id', component: PostFormComponent },
  { path: 'table/:id', component: TableFormComponent },
  { path: 'tableList', component: TableListComponent},
  { path: 'tableForm', component: TableFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}