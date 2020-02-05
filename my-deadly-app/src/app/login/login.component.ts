import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private _form: FormGroup;

  constructor(private _builder: FormBuilder) {
      this._form = _builder.group({
        'username': ['', [Validators.required]],
        'password': ['', [Validators.required]]
      });
   }

  ngOnInit() {
  }


  get form(): FormGroup {
    return this._form;
}

}
