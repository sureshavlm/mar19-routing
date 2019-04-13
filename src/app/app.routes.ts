import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
						{ 
							path: 'home', component: HomeComponent, children: [
								{ 
									path: 'product/:id', component: ProductComponent
								}
							]
						},
						{ 
							path: 'about', component: AboutComponent
						},
						{ 
							path: '**', redirectTo: 'home'
						}

						];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);