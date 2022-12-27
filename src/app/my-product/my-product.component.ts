import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {ChangeDetectorRef } from '@angular/core';
import { ProductService } from '../appServices/product/product.service';
import { first } from 'rxjs';
import {Product, products} from '../appPages/product';



const ELEMENT_DATA:any=[...products];

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
})
export class MyProductComponent implements OnInit {

  getProduct:any;

  @ViewChild('paginator')
  paginator!: MatPaginator;
  displayedColumns: string[] = ['id','name', 'sale_price', 'mrp', 'description','unit','category'];
  dataSource!: MatTableDataSource<Product>;
  selection = new SelectionModel<Product>(true, []);

  constructor(private cdref: ChangeDetectorRef,private productService:ProductService) { }

  ngAfterViewInit(){

    setTimeout(() => {
     // this.dataSource=new MatTableDataSource(ELEMENT_DATA);
   // this.dataSource.paginator=this.paginator;

    });

     if (sessionStorage.length === 0) {
      window.location.href="";
    }

  }


  ngOnInit(): void {
    this.productService.getProduct().pipe(first()).subscribe(
      (resp)=>{
        this.getProduct=resp;
        this.dataSource=new MatTableDataSource(resp);
        this.dataSource.paginator=this.paginator;
        console.log("Get Product response::",resp);
      },err=>{ console.log(err);}
    )
  }

   //Filter start
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  //Filter End

   //Checkbox start
   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = 1 ;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Product): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
  //checkbox End

}
