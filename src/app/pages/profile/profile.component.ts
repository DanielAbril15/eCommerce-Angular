import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { lastValueFrom } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  localUser!: any;
  formLogin: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authSrv: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.localUser = !!this.authSrv.getUser()
      ? JSON.parse(this.authSrv.getUser()!)
      : null;
    console.log(this.localUser);
  }

  async login() {
    let response: any = await lastValueFrom(
      this.authSrv.login(
        this.formLogin.controls['email'].value,
        this.formLogin.controls['password'].value
      )
    );
    localStorage.setItem('token', JSON.stringify(response.data.token));
    localStorage.setItem('user', JSON.stringify(response.data.user));
  }
  refresh(): void {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
  handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['home']);
  }
}
