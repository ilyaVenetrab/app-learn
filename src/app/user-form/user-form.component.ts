import { Component, EventEmitter, Output } from '@angular/core';
import { IUsers } from '../shared/users/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  @Output() public add: EventEmitter<IUsers> = new EventEmitter();

  public form: FormGroup = this._fb.group({
    name: ['', [Validators.required]],
    username: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    website: [''],
  });

  constructor(
    private readonly _fb: FormBuilder
  ) {
  }

  public submit(): void {
    if (this.form.valid) {
      this.add.emit(this.form.value);
      this.form.reset();
    } else {
      this.form.setErrors({
        name: this.form.get('name')?.errors,
        username: this.form.get('username')?.errors,
        email: this.form.get('email')?.errors
      });
    }
  }
}
