import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
@Component({
  selector: 'app-view-roles',
  templateUrl: './view-roles.component.html',
  styleUrls: ['./view-roles.component.css']
})
export class ViewRolesComponent implements OnInit {
a:any;
res:any;
p:number=1;
  constructor(public loginservice: LoginService) { }

  ngOnInit(): void {
this.viewroles()
  }
  viewroles() {
  const obj={
    "expression": "",
    "sortby": "",
    "rowno": 0
  }

  this.loginservice.viewroles(obj).subscribe((res:any)=>{
    console.log(res);
    this.a=res;

  })
}
}
