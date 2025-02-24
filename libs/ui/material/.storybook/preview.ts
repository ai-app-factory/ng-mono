import { moduleMetadata, Preview } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import DocumentationTemplate from './DocumentationTemplate.mdx';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from "../docs/documentation.json";

// Set up compdoc
setCompodocJson(docJson);

export const withTheme = (
  Story: any,
  context: any,
): any => {
  const selectedTheme = context.globals.theme;
  const body = document.body;
  body.className = ''; // Clear existing classes
  body.classList.add(selectedTheme);
  // Apply the selected theme using the service

  return Story();
}

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
  withTheme
];



export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'indigo-pink',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'dark-theme', right: '🌙', title: 'Dark Theme' },
        { value: 'light-theme', right: '☀️', title: 'Light Theme' },
        { value: 'rose-red', right: '🌹', title: 'Rose Red Theme' },
        {value: 'cyan-orange', right: '🟦', title: 'Cyan Orange Theme'},
        {value: 'orange-red', right: '🟧', title: 'Orange Red Theme'},
        {value: 'azure-blue', right: '💙', title: 'Azure Blue theme'},
        {value: 'magenta-violet', right: '💜', title: 'Magenta Violet theme'},
      ],
      showName: true,
    },
  },
};


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
