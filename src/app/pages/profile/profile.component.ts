import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  formLogin: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });
  constructor(private fb: FormBuilder, private authSrv: AuthService) {}

  login() {
    try {
      this.authSrv.login(this.formLogin.value).subscribe((res) => {
        console.log(res);
      });
    } catch (error: any) {
      console.log(error);
    }
  }
}
