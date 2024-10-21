import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

export const decorators = [
  moduleMetadata({
    imports: [
      BrowserAnimationsModule,
      MatButtonModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
    ],
  }),
];

// Set up compdoc
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../docs/documentation.json';
setCompodocJson(docJson);
