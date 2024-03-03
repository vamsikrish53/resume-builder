import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResumeService } from 'src/app/service/resume.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass'],
})
export class ExperienceComponent implements OnInit {
  constructor(private resumeService: ResumeService) {}

  editorConfig: object = {
    buttons: 'bold,italic,underline,ul',
    buttonsMD: 'bold,italic,underline,ul',
    buttonsSM: 'bold,italic,underline,ul',
    buttonsXS: 'bold,italic,underline,ul',
    hideStatusbar: true,
    placeholder: 'Provide your job summary here...',
  };

  experienceForm!: FormGroup;

  ngOnInit(): void {
    this.experienceForm = new FormGroup({
      companyName: new FormControl('', [Validators.required]),
      jobTitle: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl(),
      jobSummary: new FormControl('', [Validators.required]),
    });
    this.loadValues();
  }

  saveDetails() {
    if (this.experienceForm.valid) {
      this.resumeService.saveExperience(this.experienceForm);
    }
  }

  private loadValues() {
    const experienceDetails =
      this.resumeService.resumeDetails.experiences.length > 0
        ? this.resumeService.resumeDetails.experiences[0]
        : undefined;
    this.experienceForm.patchValue({
      companyName: experienceDetails?.companyName,
      jobTitle: experienceDetails?.jobTitle,
      city: experienceDetails?.city,
      startDate: experienceDetails?.startDate,
      endDate: experienceDetails?.endDate,
      jobSummary: experienceDetails?.jobSummary,
    });
  }
}
