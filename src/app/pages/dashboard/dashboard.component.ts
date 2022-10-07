import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableBtn } from '../shared/data-table/interfaces/table-btn';
import { TableColumn } from '../shared/data-table/interfaces/table-column';
import { TableMenu } from '../shared/data-table/interfaces/table-menu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class DashboardComponent implements OnInit {
  data: any[];
  columns: TableColumn[]; // this will define what you pass over to the table
  buttons: TableBtn[];
  menuButtons: TableMenu[];

  constructor() {
    this.data = [
      {

            id: 1,
            first_name: 'string',
            lastName: 'string',

      },
    ];

    /**
     * build the colums;
     * *columnDef: attribute name;
     * *header: column title;
     * *cell: row text
     * note that the cell attribute is the same as the columnDef attribute
     */
    this.columns = [
      {
        columnDef: 'id',
        columnSearch: 'idFilter',
        header: 'Id',
        cell: (element: any) => `${element.id}`,
        sort: false,
        directionSort: 'asc',
        activeSort: false,
      },
      {
        columnDef: 'first_name',
        columnSearch: 'first_nameFilter',
        header: 'First Name',
        cell: (element: any) => `${element.first_name}`,
        sort: false,
        directionSort: 'asc',
        activeSort: false,
      },
      {
        columnDef: 'last_name',
        columnSearch: 'last_nameFilter',
        header: 'Last Name',
        cell: (element: any) => `${element.last_name}`,
        sort: false,
        directionSort: 'asc',
        activeSort: false,
      },
    ];

    /**
     * build the buttons;
     * styleClass: button style;
     * icon: which material icon should be used;
     * payload: what value from the object should be returned;
     * action: what name should the action have
     */
    this.buttons = [
      {
        styleClass: 'btn btn-success px-2',
        icon: 'fa-eye',
        iconColor: '#000',
        payload: (element: any) => element,
        action: 'view',
        type: 'btn',
        disable: (element: any) => false,
        showHidden: (element: any) => true,
      },
    ];

    /**
     * build the menuButtons;
     * styleClass: button style;
     * icon: which material icon should be used;
     * payload: what value from the object should be returned;
     * action: what name should the action have
     */
    this.menuButtons = [
      {
        styleClass: 'btn btn-primary px-2',
        icon: 'fa-edit',
        payload: (element: any) => element,
        action: 'edit',
        description: 'pages.business.table.menu.edit',
        disable: (element: any) => {
          let isDisabled = false;

          return isDisabled;
        },
      },
      {
        styleClass: 'btn btn-success px-2',
        icon: 'fa-truck',
        payload: (element: any) => element,
        action: 'addShipping',
        description: 'pages.business.table.menu.shipping',
        disable: (element: any) => {
          let isDisabled = false;

          return isDisabled;
        },
      },
    ];
  }

  ngOnInit() {}

  buttonClick(arg) {}

  rowDblClick(arg) {}

  loadData(arg): void {}
}
