import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent implements OnInit {
  a: any;
  p: number = 1;
  selected: any;
  sol:any;
  userId: any;


  constructor(public loginservice: LoginService) {}

  ngOnInit(): void {
    this.viewusers();

  }
  viewusers() {
    const obj = {
      "userId": 0,
    };
    this.loginservice.getUserbyId(obj).subscribe((res: any) => {
      console.log(res);
      this.a = res;
    });
  }
  deleteuser(){
    const obj={
      "action":'D',
      "user_Id": 1007,
    }
    this.loginservice.getUserbyId(obj).subscribe((res:any)=>{
      console.log(res);
    this.sol=res
    })
  }
}
