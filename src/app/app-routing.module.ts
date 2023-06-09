import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { FormComponent } from './MyComponents/form/form.component';
import { TodosComponent } from './MyComponents/todos/todos.component';


const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
