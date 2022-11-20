import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './appPages/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './appPages/home/home.component';
import { CommonModuleModule } from './common-module/common-module.module';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MyProductComponent } from './my-product/my-product.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent, DialogContentExampleDialog } from './dialog/dialog.component';
import { AddProductComponent } from './appPages/add-product/add-product.component';
import { AddCustomerComponent } from './appPages/add-customer/add-customer.component';
import { AddPurchaseComponent } from './appPages/add-purchase/add-purchase.component';
import { AddSaleComponent } from './appPages/add-sale/add-sale.component';
import { AddCategoryComponent } from './appPages/add-category/add-category.component';
import { AvailableStockComponent } from './appPages/available-stock/available-stock.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MyCartComponent,
    MyProductComponent,
    DialogComponent,
    DialogContentExampleDialog,
    AddProductComponent,
    AddCustomerComponent,
    AddPurchaseComponent,
    AddSaleComponent,
    AddCategoryComponent,
    AvailableStockComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModuleModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatDialogModule,
    MatCardModule
  
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
