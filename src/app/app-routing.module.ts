import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { NewsComponent } from './news/news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth.guard';
import { SecureComponent } from './secure/secure.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'products/:id/:title', component: ProductDetailComponent},
  { path: 'news', component: NewsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'secure', component: SecureComponent},
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] }, //การอ้างให้ Routing Module loadChildren ของ dashboard เมื่อเข้า path: 'dashboard' ให้วิ่งมาที่หน้าแรกของ DashboardModule
  { path: '**', component: PagenotfoundComponent} //Routes หน้าที่ไม่มีอยู่จริง *ไว้ล่างสุดเสมอ
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
