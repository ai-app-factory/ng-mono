import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable, Observer} from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import {AsyncPipe} from '@angular/common';

/**
 * @title Tab group with asynchronously loading tab contents
 * @interface Tab
 * @property label: string - The label for the tab
 * @property content: string - The content to display when the tab is active
 * @example
 * {label: 'First', content: 'Content 1'}
 * {label: 'Second', content: 'Content 2'}
 * {label: 'Third', content: 'Content 3'}
 * @see https://material.angular.io/components/tabs/overview
 * @description
 * The tab group displays a list of tabs for navigation between different content.
 * Clicking on a tab sets the active tab and displays its content.
 *
 */
export interface Tab {
  label: string;
  content: string;
}

/**
 * @title Tab group with asynchronously loading tab contents
 * @inputs tabs: Tab[] - Array of tabs to display
 * @description
 * The tab group displays a list of tabs for navigation between different content.
 * Clicking on a tab sets the active tab and displays its content.
 * The tab contents are loaded asynchronously,
 * and the tab group displays a loading spinner while waiting for the content to load.
 * The tab group is based on Angular Material's `mat-tab-group`.
 * @see https://material.angular.io/components/tabs/overview
 *
 */
@Component({
  selector: 'lib-tabs',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    AsyncPipe
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {

  asyncTabs: Observable<Tab[]>;

  @Input() tabs: Tab[] = [
    {label: 'First', content: 'Content 1'},
    {label: 'Second', content: 'Content 2'},
    {label: 'Third', content: 'Content 3'},
  ];

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<Tab[]>) => {
      setTimeout(() => {
        observer.next(this.tabs);
      }, 1000);
    });
  }
}
