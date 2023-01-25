import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { ObjectiveComponent } from './objective/objective.component';
import { EducationComponent } from './education/education.component';
import { ProfessionComponent } from './profession/profession.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent} from './hobbies/hobbies.component'
const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component : ObjectiveComponent
      },
      {
        path: 'education',
        component: EducationComponent
      },
      {
        path: 'profession',
        component: ProfessionComponent
      },
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'hobbies',
        component: HobbiesComponent
      } 
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
