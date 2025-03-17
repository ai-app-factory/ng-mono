import {
  Component,
  Input,
  signal,
  TemplateRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

export interface ToolBarRow {
  leadingIcon?: string;
  title: string;
  trailingIcons?: string[];
}

export interface ToolbarTemplates {
  /**
   * Custom start content.
   */
  start(): TemplateRef<any>;
  /**
   * Custom end content.
   */
  end(): TemplateRef<any>;
  /**
   * Custom center content.
   */
  center(): TemplateRef<any>;
}

@Component({
  selector: 'lib-tool-bar',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss',
})
export class ToolBarComponent {

  @Input() toolBarType:
    'default' |
    'with-templates' |
    'only-icons' = 'default';

  @Input() onlyIconsList?: string[];
  @Input() set toolBarRows(value: ToolBarRow[]) {
    this._toolBarRows.set(value);
  }

  protected _toolBarRows = signal<ToolBarRow[]>([
    {
      leadingIcon: 'menu',
      title: 'Menu',
      trailingIcons: ['search', 'more_vert']
    }
  ]);
}
