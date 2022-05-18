import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  url: string = '';
  selectedimage: any;
  sol: any;


  constructor(public loginservice: LoginService, public fb:FormBuilder) {}

  ngOnInit(): void {

  this.editprofile()
}

  signupform = this.fb.group({
    Fname: [''],
    Lname: [''],
    email: [''],
    mobile: [''],
    address: [''],
    MapAddressLink: [''],
    user_name: [''],
    user_password: [''],
    IsAdmin: [''],
    type: [''],
    user_status: [''],
    user_role: [''],
  });

  selectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => (this.url = event.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedimage = event.target.files[0];
    }
  }

  editprofile() {
    const obj = {
      "action":"U",
      "userId": Input,
    };
    this.loginservice.getUserbyId(obj).subscribe((res: any) => {
      console.log(res);
      this.sol=res;
    });

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
