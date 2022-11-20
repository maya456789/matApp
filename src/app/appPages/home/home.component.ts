import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {ChangeDetectorRef } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {

  showFiller = false;

  @ViewChild('paginator')
  paginator!: MatPaginator;
  displayedColumns: string[] = ['select','position', 'name', 'weight', 'symbol'];
  dataSource!: MatTableDataSource<PeriodicElement>;
  selection = new SelectionModel<PeriodicElement>(true, []);

  public product:Array<any>=[{p_id:1,p_no:101,p_name:'p1'},{p_id:2,p_no:101,p_name:'p1'},{p_id:3,p_no:101,p_name:'p1'},{p_id:4,p_no:101,p_name:'p1'},{p_id:5,p_no:101,p_name:'p1'},{p_id:6,p_no:101,p_name:'p1'}]
  constructor( private cdref: ChangeDetectorRef) { }

  ngAfterViewInit(){
  
    setTimeout(() => { 
      this.dataSource=new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator=this.paginator;

    }); 
   
     if (sessionStorage.length === 0) {
      window.location.href="";
    }
   
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
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
  //checkbox End

  onLogout(){
    window.sessionStorage.clear();
    window.location.href='';
  }
}
