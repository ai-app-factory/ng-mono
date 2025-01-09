import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

export interface tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'lib-grid-list',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,],
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.scss',
})
export class GridListComponent {
  @Input() columns: string = '4';
  @Input() rowHeight: string = '100px';

  @Input() set tiles(tiles: tile[]) {
    this._tiles.set(tiles);
  }

  protected _tiles = signal<tile[]>([
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ]);
}
