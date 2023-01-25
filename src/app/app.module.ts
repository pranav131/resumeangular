import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PreviewComponent } from './preview/preview.component';
import { TruncatePipe } from './custom/pipe/truncate.pipe';
import { HeaderComponent } from './preview/header/header.component';
import { ProfessionalComponent } from './preview/professional/professional.component';
import { EducationComponent } from './preview/education/education.component';
import { HobbiesComponent } from './preview/hobbies/hobbies.component';
import { ExperienceComponent } from './preview/experience/experience.component';
import { Preview2Component } from './preview2/preview2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    TruncatePipe,
    HeaderComponent,
    ProfessionalComponent,
    EducationComponent,
    HobbiesComponent,
    ExperienceComponent,
    Preview2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
