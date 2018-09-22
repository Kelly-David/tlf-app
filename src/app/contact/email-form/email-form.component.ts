import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  emailForm: FormGroup;
  public enquiry = {
    email: '',
    message: '',
    check: false
  };

  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.emailForm = this.fb.group({
      'email': ['', [Validators.required]],
      'message': ['', [Validators.required]],
      'check': ['', []]
    });
  }

  public save(enquiry: any) {
    console.log(enquiry);
  }

}
