import { Component, OnInit } from '@angular/core';
import { ActionComponent } from 'src/app/action/action.component';
import {GridOptions} from "ag-grid-community";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  gridOptions: GridOptions;
  private gridApi;
  gridColumnApi: any;
  // private gridOptions;
  constructor() { 
    this.gridOptions = <GridOptions>{};
  }
  columnDefs = [
    { field: 'FirstName',sortable: true, filter: true, editable:true ,width: 120},
    { field: 'LastName',sortable: true, filter: true,width: 120 },
    { field: 'Address',sortable: true, filter: true,width: 110},
    { field: 'Action',sortable: true, filter: true,cellRendererFramework: ActionComponent,
  }
];

rowData = [
    { FirstName: 'Jack', LastName: 'Abc', Address: 'Mumbai' },
    { FirstName: 'Ana', LastName: 'Pqr', Address: 'Pune' },
    { FirstName: 'Smith', LastName: 'Rst', Address: 'Thane' },
    { FirstName: 'Tom', LastName: 'Uvw', Address: 'Mumbai' },
    { FirstName: 'Rida', LastName: 'Xyz', Address: 'Pune' },
    { FirstName: 'Adam', LastName: 'Efg', Address: 'Thane' },
   
];
  ngOnInit(): void {
  }

 
  onGridReady(params:any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;   
   
  }
  onFilterTextBoxChanged() {
    this.gridOptions.api.setQuickFilter((document.getElementById('filter-text-box') as HTMLInputElement).value);
  }
}
