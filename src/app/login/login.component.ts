import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  });

  isLogin = false;
  profile: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    if (this.authService.isLogin()) {
      this.isLogin = true;
      this.profile = JSON.parse(localStorage.getItem('profile'));
    }
  }

  ngOnInit() {
  }

  login() {
    // console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      (token) => {
        if (token) {
          this.isLogin = true;
          alert('เข้าสู่ระบบเรียบร้อย');
          localStorage.setItem('token', JSON.stringify(token));
          this.authService.getProfile().subscribe(
            (profile) => {
              if (profile) {
                localStorage.setItem('profile', JSON.stringify(profile));
                this.profile = JSON.parse(localStorage.getItem('profile'));
              }
            }
          );
        }
      }, 
      (error) => {
        alert(error.error.error_description);
      }
    );
  }
  logout() {
    this.authService.logout();
    this.isLogin = false;
    this.router.navigate(['/']);
    this.loginForm.reset();
  }
}
