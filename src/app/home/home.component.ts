import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { BasicDetailsComponent } from '../resume-sections/basic-details/basic-details.component';
import { ExperienceComponent } from '../resume-sections/experience/experience.component';
import { SkillComponent } from '../resume-sections/skill/skill.component';
import { Education } from '../model/sections/Education';
import { EducationComponent } from '../resume-sections/education/education.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {


  basicComp: any;

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }
  editMode: boolean = false;
  ngOnInit(): void {
  }

  async loadSection(section: number) {
    console.log(section);
    this.editMode = true;
    this.container.clear();
    if (section == 1) {
      const factory = this.resolver.resolveComponentFactory(BasicDetailsComponent);
      const componentRef = this.container.createComponent(factory);
    } else if (section == 2) {
      const factory = this.resolver.resolveComponentFactory(ExperienceComponent);
      const componentRef = this.container.createComponent(factory);
    } else if (section == 3) {
      const factory = this.resolver.resolveComponentFactory(SkillComponent);
      const componentRef = this.container.createComponent(factory);
    } else if (section == 4) {
      const factory = this.resolver.resolveComponentFactory(EducationComponent);
      const componentRef = this.container.createComponent(factory);
    }

  }
}
