import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./components/ADMINISTRATION/users/users.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";
import { BooksComponent } from "./components/books/books.component";
import { FooterComponent } from "./components/footer/footer.component";

import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { userService } from "src/services/users.service";
import { FormsModule } from "@angular/forms";
import { SignupComponent } from "./components/signup/signup.component";
import { UpdateUserFormComponent } from "./components/ADMINISTRATION/update-user-form/update-user-form.component";
import { ProfilComponent } from "./components/profil/profil.component";
import { BookService } from "src/services/books.service";
import { BooksByPriceDescComponent } from "./components/books-by-price-desc/books-by-price-desc.component";
import { BooksByPriceAscComponent } from "./components/books-by-price-asc/books-by-price-asc.component";
import { BooksByNoteComponent } from "./components/books-by-note/books-by-note.component";
import { DetailsBookComponent } from "./components/details-book/details-book.component";
import { AddbookComponent } from "./components/ADMINISTRATION/addbook/addbook.component";
import { ListbooksComponent } from "./components/ADMINISTRATION/listbooks/listbooks.component";
import { UpdatebookComponent } from "./components/ADMINISTRATION/updatebook/updatebook.component";
import { AddcategoryComponent } from "./components/ADMINISTRATION/addcategory/addcategory.component";
import { categoryService } from "src/services/categories.service";
import { AuthentificationComponent } from "./components/signin/authentification.component";
import { authentificationService } from "src/services/authentification.service";
import { AddAdminComponent } from "./components/ADMINISTRATION/add-admin/add-admin.component";
import { ListAdminsComponent } from "./components/ADMINISTRATION/list-admins/list-admins.component";
import { DashboardbarComponent } from "./components/ADMINISTRATION/dashboardbar/dashboardbar.component";
import { AuthGuard} from "./guard/auth-guard.guard";
import { NosigninauthGuard} from "./guard/nosigninauthgard.guard";


const appRoutes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "users", component: UsersComponent },
  { path: "home", component: HomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "updateUser/:id", component: UpdateUserFormComponent },
  { path: "profil/:id", component: ProfilComponent },
  { path: "books", component: BooksComponent },
  { path: "books-orderby-price-desc", component: BooksByPriceDescComponent },
  { path: "books-orderby-price-asc", component: BooksByPriceAscComponent },
  { path: "books-orderby-note", component: BooksByNoteComponent },
  { path: "details-book/:id", component: DetailsBookComponent },
  { path: "addBook", component: AddbookComponent },
  { path: "listBooks", component: ListbooksComponent },
  { path: "updateBook/:id", component: UpdatebookComponent },
  { path: "addCategory", component: AddcategoryComponent },
  { path: "signin", component: AuthentificationComponent },
  { path: "addAdmin", component: AddAdminComponent },
  { path: "list-admins", component: ListAdminsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    BooksComponent,
    SignupComponent,
    UpdateUserFormComponent,
    ProfilComponent,
    BooksByPriceDescComponent,
    BooksByPriceAscComponent,
    BooksByNoteComponent,
    DetailsBookComponent,
    AddbookComponent,
    ListbooksComponent,
    UpdatebookComponent,
    AddcategoryComponent,
    AuthentificationComponent,
    AddAdminComponent,
    ListAdminsComponent,
    DashboardbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    userService,
    BookService,
    categoryService,
    authentificationService,
    AuthGuard,
    NosigninauthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
