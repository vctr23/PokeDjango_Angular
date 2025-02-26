import { Routes } from '@angular/router';
import { SetComponent } from './set/set.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ExpansionsComponent } from './expansions/expansions.component';
import { LoginComponent } from './login/login.component';
import { PackopenedComponent } from './packopened/packopened.component';

export const routes: Routes = [
  { path: '', component: SetComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'expansions', component: ExpansionsComponent },
  { path: 'packopened', component: PackopenedComponent},
];
