import { Component, OnInit } from '@angular/core';
import {columnDef} from 'src/app/columnDef';
import { AngularGridInstance,
  Column,
  Editors,
  EditorArgs,
  EditorValidator,
  FieldType,
  Filters,
  Formatters,
  GridOption,
  GridOdataService,
  OnEventArgs,
  OperatorType,
  Sorters,
  CaseType, } from 'angular-slickgrid';

  const NB_ITEMS = 995;

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  columnDefinitions1 : Column[];
  columnDefinitions2 : Column[];

  gridOptions1: GridOption;
  gridOptions2: GridOption;

  dataset1: any[];
  dataset2: any[];

  receivedObjectKeys = [];
  obj : Column = {
    id : null,
    field : null
  };

  constructor() { }

  ngOnInit() {


    this.columnDefinitions1 = [
      { id: 'Code', name: 'Code', field: 'Code', sortable: true },
      { id: 'Name', name: 'Name', field: 'Name', sortable: true, formatter: Formatters.uppercase},
      { id: 'StatusCode', name: 'Status', field: 'StatusCode', sortable: true }
    ];

    this.columnDefinitions2 = [];

    

    this.gridOptions1= {
      enableAutoResize: true,
      enableSorting: true,
      enablePagination: true,
      enableAddRow             : false,
      leaveSpaceForNewRows     : true,
      autoEdit                 : false,
      pagination:{
        pageSizes : [5, 10, 15, 20, 25, 50, 75, 100],
        pageSize : 5
      }
    };

    this.gridOptions2 = {
      enableAutoResize: true,
      enableSorting: true,
      enablePagination: true,
      enableAddRow             : false,
      leaveSpaceForNewRows     : true,
      autoEdit                 : false,
      pagination:{
        pageSizes : [5, 10, 15, 20, 25, 50, 75, 100],
        pageSize : 5
      }
    }


    this.dataset1 = this.mockData(NB_ITEMS);
    this.dataset2 = this.mockData(NB_ITEMS);
    
    
    this.receivedObjectKeys = Object.keys(this.dataset1[0]);
    for(var i = 0; i<this.receivedObjectKeys.length; ++i){
      this.obj = {
        id : this.receivedObjectKeys[i],
        name : this.receivedObjectKeys[i],
        field : this.receivedObjectKeys[i],
        sortable :true
      };
      this.columnDefinitions2.push(this.obj);
    }

  }

  mockData(count : number){
    const mockDatadet = [];

    for(let i = 0; i < count; ++i){
      const randomCode = Math.floor(Math.random() * 1000);
      
      mockDatadet[i] = {
        id: i,
        Code : randomCode,
        Name : 'Banglore',
        StatusCode: 'Active'
      };
    }

    return mockDatadet;
  }


}
