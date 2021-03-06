// import { NgModule } from '@angular/core';
// import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
// import { from } from 'rxjs';
// import {  ContactComponent } from './contact/contact.component';
// import {  DemoComponent } from './demo/demo.component';
// import {  NotFoundComponent } from './not-found/not-found.component';

// import {  ProductDetailComponent } from './product-detail/product-detail.component';

// import {  LayoutComponent } from './layout/layout.component';

// import {  ProductsComponent } from './products/products.component';
// import { HomeModule } from './home/home.module';
// import { AdminGuard } from './admin.guard';

// const routes: Routes = [
//   {
//     path:'',
//     component:LayoutComponent,
    
//     children:[
//       {
//         path:'',
//         redirectTo: '/home',
//         pathMatch:'full',
//       },
//       {
//         path:'home',
//         loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule)
//         },
//         {
//           path:'products',
//           component:  ProductsComponent
//           },
//           {
//             path:'products/:id',
//             component:  ProductDetailComponent
//         },
//           {
//             path:'contact',
//             canActivate:[AdminGuard],
//             component:  ContactComponent
//           },

//     ]
//   },
  
//     {
//         path:'demo',
//         component:  DemoComponent
//     },
//     {
//       path:'**',
//       component:  NotFoundComponent
//   }

// ];
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },{
        path: 'order',
        canActivate: [AdminGuard],
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'demo',
        canActivate: [AdminGuard],
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
      },
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
