import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit() {}

  buttonClick(arg) {}

  rowDblClick(arg) {}

  loadData(arg): void {}
}
