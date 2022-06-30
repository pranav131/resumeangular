import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewComponent } from './preview/preview.component';
import { Preview2Component } from './preview2/preview2.component';

const routes: Routes = [{ path: '', pathMatch:'full', redirectTo: 'user' },
{ path: 'preview', component: PreviewComponent },
{ path: 'preview2', component: Preview2Component },
{
  path: 'user',
  loadChildren: './user/user.module#UserModule',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
