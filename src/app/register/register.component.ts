import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users = {
    province: [
      { id : 1, name: 'บุรีรัมย์' },
      { id : 2, name: 'ขอนแก่น' },
      { id : 3, name: 'นครราชสีมา' }
    ]
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register(formValues: any) {
    //console.log(formValues);
    this.authService.register(formValues).subscribe(
      (feedback) => {
        if (feedback.status === 'ok'){
          alert(feedback.message);
          this.router.navigate(['/']);
        }else {
          alert(feedback.message);
        }
      }
    )
  }

}
