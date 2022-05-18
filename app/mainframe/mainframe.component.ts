import { Component, OnInit } from '@angular/core';
import { userinfo } from '../model/user';
import { LoginService } from '../login.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mainframe',
  templateUrl: './mainframe.component.html',
  styleUrls: ['./mainframe.component.css']
})
export class MainframeComponent implements OnInit {
  userId: any;
  constructor( public loginservice: LoginService,
    public fb: FormBuilder,
    public router: Router) { }

  ngOnInit(): void {
    this.login();
  }
  loginForm = this.fb.group({
    userName: [''],
    password: [''],
  });
  login() {
    const model = new userinfo(
      this.loginForm.controls['userName'].value,
      this.loginForm.controls['password'].value
    );
    this.loginservice.login(model).subscribe((res: any) => {
      console.log(res);

      if (res == '') {
        alert('Enter Correct Credentials');
        this.loginForm.reset();
      } else {
        alert('Welcome To AxelOne');

        this.userId = res[0].userId;
        console.log(this.userId);
        this.getUserById(this.userId);
        this.loginForm.reset();
        this.router.navigate(['admin']);
      }
    });
    localStorage.setItem("key", this.loginForm.controls['userName'].value)
  }
  getUserById(input: any) {
    const obj = {
      "userId": input,
    };
    this.loginservice.getUserbyId(obj).subscribe((res: any) => {
      console.log(res);
    });
  }
}
