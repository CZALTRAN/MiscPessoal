import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  inputData = {
    email: '',
    subscription: '',
    password: ''
  }
  submitted = false;

  ngOnInit(): void {
    console.log(this.form);
  }

  checkAllTouched(): boolean {
    for (let element in this.form.controls) {
      if (!this.form.controls[element].touched) {
        return false;
      }
    }
    return true;
  }

  onSubmit() {
    this.submitted = true;
    this.inputData.email = this.form.value.email;
    this.inputData.subscription = this.form.value.assinatura;
    this.inputData.password = this.form.value.password;

    this.form.reset();
  }
}