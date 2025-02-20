import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        {value: 'light-theme', right: '', title: 'Light Theme'},
        {value: 'dark-theme', right: '', title: 'Dark Theme'},
        {value: 'my-app-theme', right: '', title: 'My App Theme'},
        {value: 'azure-blue', right: '', title: 'Azure Blue'},
        {value: 'cyan-orange', right: '', title: 'Cyan Orange'},
        {value: 'deeppurple-amber', right: '', title: 'Deep Purple Amber'},
        {value: 'indigo-pink', right: '', title: 'Indigo Pink'},
        {value: 'pink-bluegrey', right: '', title: 'Pink Blue Grey'},
        {value: 'purple-green', right: '', title: 'Purple Green'},
        {value: 'rose-red', right: '', title: 'Rose Red'},
        {value: 'magenta-violet', right: '', title: 'Magenta Violet'},
      ],
      showName: true,
    },
  },
};

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
  (Story: any, context: any) => {
    const theme = context.globals.theme;
    document.body.className = '';
    document.body.classList.add(theme);
    return Story();
  }

];

// Set up compdoc
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../docs/documentation.json';
setCompodocJson(docJson);
