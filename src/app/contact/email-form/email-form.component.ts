import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  emailForm: FormGroup;
  public enquiry = {
    email: '',
    message: ''
    };
  public formSent = false as boolean;

  constructor(
    public fb: FormBuilder,
    private cs: ContactService
  ) { }

  ngOnInit() {
    this.emailForm = this.fb.group({
      'email': ['', [Validators.required]],
      'message': ['', [Validators.required]]
    });
  }

  get email() { return this.emailForm.get('email'); }
  get message() { return this.emailForm.get('message'); }

  public save() {
    return this.cs.saveMail({
      email: this.email.value,
      message: this.message.value
    }).then( () => {
      this.formSent = true;
    });
  }

}
