import {
  Component,
  AfterViewInit,
  ViewChild,
  Input,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';

import { PeriodicElement, ELEMENT_DATA } from './data/element-data';

@Component({
  selector: 'lib-table',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);
  @Input() displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @Input() withPaginator?: boolean = true;
  @Input() pageSizeOptions?: number[] = [5, 10, 20, 30];

  @Input() dataSource?: MatTableDataSource<any>  = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource!.paginator = this.paginator;
    this.dataSource!.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
