import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './appPages/add-category/add-category.component';
import { AddCustomerComponent } from './appPages/add-customer/add-customer.component';
import { AddProductComponent } from './appPages/add-product/add-product.component';
import { AddPurchaseComponent } from './appPages/add-purchase/add-purchase.component';
import { AddSaleComponent } from './appPages/add-sale/add-sale.component';
import { AvailableStockComponent } from './appPages/available-stock/available-stock.component';
import { HomeComponent } from './appPages/home/home.component';
import { LoginComponent } from './appPages/login/login.component';
import { DialogComponent } from './dialog/dialog.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MyProductComponent } from './my-product/my-product.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:HomeComponent,children:[
    {path:'add-product',component:AddProductComponent},
    {path:'add-customer',component:AddCustomerComponent},
    {path:'add-category',component:AddCategoryComponent},
    {path:'add-purchase',component:AddPurchaseComponent},
    {path:'add-sale',component:AddSaleComponent},
    {path:'available-stock',component:MyProductComponent},
    {path:'mat-table',component:MyProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
