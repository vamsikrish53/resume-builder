import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JoditAngularModule } from 'jodit-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './resume-sections/education/education.component';
import { ExperienceComponent } from './resume-sections/experience/experience.component';
import { PersonalInformationComponent } from './resume-sections/personal-information/personal-information.component';
import { SkillComponent } from './resume-sections/skill/skill.component';
import { ResumeService } from './service/resume.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalInformationComponent,
    ExperienceComponent,
    SkillComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FontAwesomeModule,
    JoditAngularModule,
  ],
  providers: [ResumeService],
  bootstrap: [HomeComponent],
})
export class AppModule {}
