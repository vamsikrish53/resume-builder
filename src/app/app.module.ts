import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BasicDetailsComponent } from './resume-sections/basic-details/basic-details.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExperienceComponent } from './resume-sections/experience/experience.component';
import { SkillComponent } from './resume-sections/skill/skill.component';
import { EducationComponent } from './resume-sections/education/education.component';
import { ResumeService } from './service/resume.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicDetailsComponent,
    ExperienceComponent,
    SkillComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ResumeService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
