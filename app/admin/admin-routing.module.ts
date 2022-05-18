import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewRolesComponent } from './view-roles/view-roles.component';
import { AuthGuard } from '../auth.guard';
import { LoadGuard } from '../load.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  { path: '', component: AdminComponent,canActivate:[LoadGuard] },
  { path: 'view-users',component:ViewUsersComponent,canActivate:[AuthGuard]},
  { path: 'add-user',component:AddUserComponent,canActivate:[AuthGuard]},
  { path: 'view-roles',component:ViewRolesComponent,canActivate:[AuthGuard]},
  { path: 'add-role',component:AddRoleComponent,canActivate:[AuthGuard]},
  { path: 'edit-profile',component:EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
