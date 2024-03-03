import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { PersonalInformationComponent } from '../resume-sections/personal-information/personal-information.component';
import { ExperienceComponent } from '../resume-sections/experience/experience.component';
import { SkillComponent } from '../resume-sections/skill/skill.component';
import { Education } from '../model/sections/Education';
import { EducationComponent } from '../resume-sections/education/education.component';
import { faBriefcase, faChevronLeft, faChevronRight, faIdCard, faStar, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { ResumeService } from '../service/resume.service';
import { Resume } from '../model/Resume';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  faIdCard = faIdCard;
  faStar = faStar;
  faBreifcase = faBriefcase
  faUserGraduate = faUserGraduate;
  faRight = faChevronRight;
  faLeft = faChevronLeft;
  resumeData!: Resume;
  editMode: boolean = false;
  showPreviewMsg: boolean = true;
  @ViewChild('editContainer', { read: ViewContainerRef })
  editContainer!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver, private resumeService: ResumeService, private sanitizer: DomSanitizer) {
    this.resumeService.dataUpdated.subscribe(() => {
      this.resumeData = this.resumeService.resumeDetails;
      this.showPreviewMsg = false;
    });
  }

  ngOnInit(): void {
  }

  async loadSection(section: number) {
    this.editMode = true;
    this.editContainer.clear();
    if (section == 1) {
      const factory = this.resolver.resolveComponentFactory(PersonalInformationComponent);
      const componentRef = this.editContainer.createComponent(factory);
    } else if (section == 2) {
      const factory = this.resolver.resolveComponentFactory(SkillComponent);
      const componentRef = this.editContainer.createComponent(factory);
    } else if (section == 3) {
      const factory = this.resolver.resolveComponentFactory(ExperienceComponent);
      const componentRef = this.editContainer.createComponent(factory);
    } else if (section == 4) {
      const factory = this.resolver.resolveComponentFactory(EducationComponent);
      const componentRef = this.editContainer.createComponent(factory);
    }
  }

  closeEditMode() {
    this.editContainer.clear();
    this.editMode = false;
  }

  openPdf(isDownload: boolean) {
    this.resumeService.openPdf(isDownload);
  }

  parseHTMLContent(htmlContent: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
  }

  preFillSampleData() {
    this.resumeService.preFillSampleData();
  }
}
