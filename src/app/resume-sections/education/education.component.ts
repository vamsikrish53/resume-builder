import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResumeService } from 'src/app/service/resume.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass'],
})
export class EducationComponent implements OnInit {
  constructor(private resumeService: ResumeService) {}

  educationForm!: FormGroup;

  ngOnInit(): void {
    this.educationForm = new FormGroup({
      degreeName: new FormControl('', [Validators.required]),
      collegeName: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      cgpa: new FormControl(),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
    });
    this.loadValues();
  }

  saveDetails() {
    if (this.educationForm.valid) {
      this.resumeService.saveEducation(this.educationForm);
    }
  }

  private loadValues() {
    const educationDetails =
      this.resumeService.resumeDetails.educations.length > 0
        ? this.resumeService.resumeDetails.educations[0]
        : undefined;
    this.educationForm.patchValue({
      degreeName: educationDetails?.degreeName,
      collegeName: educationDetails?.collegeName,
      city: educationDetails?.city,
      cgpa: educationDetails?.cgpa,
      startDate: educationDetails?.startDate,
      endDate: educationDetails?.endDate,
    });
  }
}
