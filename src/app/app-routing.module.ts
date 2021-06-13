import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './components/form/form.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AuthGuard } from './helpers';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NoAccessComponent } from './pages/no-access/no-access.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const usersModule = () =>
  import('./components/form/form.component').then((m) => m.FormComponent);
const accountModule = () =>
  import('./components/form/form.component').then((m) => m.FormComponent);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'no-access', component: NoAccessComponent },
  // --------
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },

  //---------
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'todo', component: TasksComponent },
  { path: 'form', component: FormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
