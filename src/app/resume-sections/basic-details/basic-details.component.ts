import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ResumeService } from 'src/app/service/resume.service';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.sass']
})
export class BasicDetailsComponent implements OnInit {

  constructor(private resumeService: ResumeService) { }

  myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      fullName: new FormControl(),
      jobTitle: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      location: new FormControl(),
      summary: new FormControl()
    });
  }

  saveDetails(form: FormGroup | undefined) {
    console.log(this.myForm?.value.fullName);
  }

}
