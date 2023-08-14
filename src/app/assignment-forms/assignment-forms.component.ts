import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-forms',
  templateUrl: './assignment-forms.component.html',
  styleUrls: ['./assignment-forms.component.css']
})
export class AssignmentFormsComponent {
  subscriptions=['Beginner','Advanced','Pro'];
  selectedSubscription="Beginner";
  @ViewChild('signupForm')
  signForm!: NgForm;
  onSubmit(){
    console.log(this.signForm.value)
  }
}
