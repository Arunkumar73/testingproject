import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {

  selectedimage: any;
  url: string = '';

  constructor(
    public loginservice: LoginService,
    public fb: FormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {}
  signupform = this.fb.group({
    Fname: ['',Validators.required,Validators.minLength],
    Lname: ['',Validators.required,Validators.minLength],
    email: ['',Validators.required,Validators.minLength],
    mobile: ['',Validators.required,Validators.minLength],
    address: ['',Validators.required,Validators.minLength],
    MapAddressLink: ['',Validators.required,Validators.minLength],
    user_name: ['',Validators.required,Validators.minLength],
    user_password: ['',Validators.required,Validators.minLength],
    IsAdmin: [''],
    type: [''],
    user_status: ['',Validators.required],
    user_role: ['',Validators.required],
  });

  SaveUser() {
    const obj = {
      "action": 'A',
      "user_Id": 0,
      "user_Firstname": this.signupform.value.Fname,
      "user_Lastname": this.signupform.value.Lname,
      "user_Phone": this.signupform.value.mobile,
      "user_Email": this.signupform.value.email,
      "user_Address": this.signupform.value.address,
      "user_Mapaddresslink": this.signupform.value.MapAddressLink,
      "user_Username": this.signupform.value.user_name,
      "uE_Password": this.signupform.value.user_password,
      "user_Profileimage": '',
      "user_Roleid": 102,
      "user_IsAdmin": this.signupform.value.IsAdmin,
      "user_Type": this.signupform.value.type,
      "user_Status": 'Y',
      "user_Created_Userid": 1,
      "err_no": 0,
    };

    this.loginservice.SaveUser(obj).subscribe((res: any) => {
      console.log(res);
      if (res == 1) {
        alert('successfully added');
        this.router.navigate(['admin']);
      } else {
        alert('Failed to add employee');
      }
    });
  }

  selectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => (this.url = event.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedimage = event.target.files[0];
    }
  }
}
