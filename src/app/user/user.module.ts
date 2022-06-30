import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedMaterialModule } from '../shared/material.module';
import { AvatarModule } from 'ngx-avatar';
import { EducationComponent } from './education/education.component';
import { ProfessionComponent } from './profession/profession.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationListComponent } from './education/education-list/education-list.component';
import { EducationAddComponent } from './education/education-add/education-add.component';
import { EducationUpdateComponent } from './education/education-update/education-update.component';
import { SkillListComponent } from './skills/skill-list/skill-list.component';
import { SkillAddComponent } from './skills/skill-add/skill-add.component';
import { SkillUpdateComponent } from './skills/skill-update/skill-update.component';
import { ProfessionListComponent } from './profession/profession-list/profession-list.component';
import { ProfessionAddComponent } from './profession/profession-add/profession-add.component';
import { ProfessionDeleteComponent } from './profession/profession-delete/profession-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, EducationComponent, ProfessionComponent, SkillsComponent, EducationListComponent, EducationAddComponent, EducationUpdateComponent, SkillListComponent, SkillAddComponent, SkillUpdateComponent, ProfessionListComponent, ProfessionAddComponent, ProfessionDeleteComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedMaterialModule,
    HttpClientModule,
    AvatarModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  entryComponents: [EducationAddComponent , SkillAddComponent , EducationUpdateComponent],
})
export class UserModule { }
