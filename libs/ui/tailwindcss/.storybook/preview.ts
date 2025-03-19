import DocumentationTemplate from './DocumentationTemplate.mdx';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../docs/documentation.json';
import { Preview } from '@storybook/angular';
setCompodocJson(docJson);



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
