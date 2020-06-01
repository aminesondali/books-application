import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './components/ADMINISTRATION/addbook/addbook.component';
import { AuthGuard } from './guard/auth-guard.guard';
import { AddAdminComponent } from './components/ADMINISTRATION/add-admin/add-admin.component';
import { AddcategoryComponent } from './components/ADMINISTRATION/addcategory/addcategory.component';
import { ListbooksComponent } from './components/ADMINISTRATION/listbooks/listbooks.component';
import { UpdatebookComponent } from './components/ADMINISTRATION/updatebook/updatebook.component';
import { UsersComponent } from './components/ADMINISTRATION/users/users.component';
import { UpdateUserFormComponent } from './components/ADMINISTRATION/update-user-form/update-user-form.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AuthentificationComponent } from './components/signin/authentification.component';
import { NosigninauthGuard } from './guard/nosigninauthgard.guard';


const routes: Routes = [
  {
    path:'listAdmins',
    component: AddAdminComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'addAdmin',
    component: AddAdminComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'users',
    component: UsersComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'updateUser/:id',
    component: UpdateUserFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'addBook',
    component: AddbookComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'listBooks',
    component: ListbooksComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'updateBook/:id',
    component: UpdatebookComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'addCategory',
    component: AddcategoryComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'profil/:id',
    component: ProfilComponent,
    canActivate:[AuthGuard]
  },
    {
    path:'signin',
    component: AuthentificationComponent,
    canActivate:[NosigninauthGuard]
  },  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
