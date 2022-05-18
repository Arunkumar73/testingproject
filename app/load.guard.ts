import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadGuard implements CanActivate {
  constructor(public router: Router) {}
  key: any;
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.key = localStorage.getItem('key');
      if (this.key === '') {
        alert("You Can't Access this Page");
        this.router.navigate(['mainframe']);
        return false;
      }
       else {
        return true;
      }
    }
  }
