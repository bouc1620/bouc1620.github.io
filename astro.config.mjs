import { defineConfig } from 'astro/config';

import solid from '@astrojs/solid-js';

export default defineConfig({
  site: 'https://bouc1620.github.io',
  integrations: [solid()],
});
