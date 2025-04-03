import { moduleMetadata, Preview } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import DocumentationTemplate from './DocumentationTemplate.mdx';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../docs/documentation.json';
import { ClarityModule } from '@clr/angular';
setCompodocJson(docJson);

export const decorators = [
  moduleMetadata({
    imports: [
      BrowserAnimationsModule,
      MatButtonModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      ClarityModule,
    ],
  }),
];


const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      }
    },
    docs: {
      toc: true,
      page: DocumentationTemplate,
    },

  },
};

export default preview;