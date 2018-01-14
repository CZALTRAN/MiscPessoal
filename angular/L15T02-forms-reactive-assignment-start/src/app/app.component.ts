import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  projectStatus = [
    { value: 'stable', label: 'Estável' },
    { value: 'critical', label: 'Crítico' },
    { value: 'finished', label: 'Finalizado' }
  ]

  ngOnInit(): void {
    this.form = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], this.forbidenEmails.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    });
  }

  invalidProjectNameSync(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return { 'projectNameIsInvalid': true }
    }
    return null;
  }

  forbidenEmails(control: FormControl): Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ 'projectNameIsInvalid': true });
        }
        else{
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }


  onSubmit() {
    console.log(this.form);
  }
}
