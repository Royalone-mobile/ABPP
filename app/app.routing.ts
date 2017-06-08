import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { FormComponent } from "./pages/form/form.component";

export const routes = [
    { path: "", component: LoginComponent },
    
    {
      path: "home", 
      component: HomeComponent,
      children: [
        {path:"", component:FormComponent},
        {path:":page_id",component:FormComponent}
      ]
    }
];

export const navigatableComponents = [
  LoginComponent,
  HomeComponent,
  FormComponent
];