import { Routes } from '@angular/router';
import { SetComponent } from './set/set.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SignUpComponent } from './sign-up/sign-up.component';
export const routes: Routes = [
  { path: '', component: SetComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'signup', component: SignUpComponent },
];
