const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
import { tailwindPresetConfig } from '../../libs/tw/src/tailwind/tailwind-preset.config';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [{ ...tailwindPresetConfig, content }],
  theme: {
    extend: {},
  },
  plugins: [],
};
