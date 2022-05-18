import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  constructor(public loginservice:LoginService,public fb:FormBuilder, public router:Router) { }

  ngOnInit(): void {
  }
  addroleform=this.fb.group({
    role_Id:[''],
    role_Uniqid:[''],
    role_Name:[''],
    role_Type:[''],
    role_Status:[''],

  })
  saverole(){


    const obj={
      "action": "A",
      "role_Id": this.addroleform.value.role_Id,
      "role_Name": this.addroleform.value.role_Name,
      "role_Type": this.addroleform.value.role_Type ,
      "role_Uniqid": this.addroleform.value.role_Uniqid,
      "role_Status": this.addroleform.value.role_Status,
      "role_Created_UserId": 0,
    }
    this.loginservice.saverole(obj).subscribe((res: any) => {
      console.log(res);
      if(res==1)
      {
        alert("successfully Role added")
        this.router.navigate(['admin']);
      }
      else{
        alert("Failed to add Role")
      }
      // this.userId=res.userId
    });
  }
  }
