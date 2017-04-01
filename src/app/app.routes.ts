import { Routes, RouterModule } from "@angular/router"
import { AboutComponent } from "./about/about.component";
import { SearchComponent } from "./search/search.component";

const APP_ROUTES: Routes = [
  {path: '', component: SearchComponent},
  {path: 'about', component: AboutComponent},
]

export const routing = RouterModule.forRoot(APP_ROUTES);
