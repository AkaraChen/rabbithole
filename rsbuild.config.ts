import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'Rabbit Hole',
    tags: [
      { tag: 'meta', attrs: { name: 'description', content: 'A fan-made unofficial Rabbit Hole website' } },
      { tag: 'meta', attrs: { name: 'author', content: 'akr' } },
      { tag: 'link', attrs: { rel: 'canonical', href: 'https://rabbithole.akr.moe' } },
      { tag: 'link', attrs: { rel: 'alternate', type: 'application/rss+xml', title: 'RSS Feed', href: '/rss.xml' } },
      // Open Graph
      { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
      { tag: 'meta', attrs: { property: 'og:title', content: 'Rabbit Hole' } },
      { tag: 'meta', attrs: { property: 'og:description', content: 'A fan-made unofficial Rabbit Hole website' } },
      { tag: 'meta', attrs: { property: 'og:url', content: 'https://rabbithole.akr.moe' } },
      { tag: 'meta', attrs: { property: 'og:image', content: 'https://rabbithole.akr.moe/og-image.jpg' } },
      { tag: 'meta', attrs: { property: 'og:site_name', content: 'Rabbit Hole' } },
      // Twitter Card
      { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
      { tag: 'meta', attrs: { name: 'twitter:title', content: 'Rabbit Hole' } },
      { tag: 'meta', attrs: { name: 'twitter:description', content: 'A fan-made unofficial Rabbit Hole website' } },
      { tag: 'meta', attrs: { name: 'twitter:image', content: 'https://rabbithole.akr.moe/og-image.jpg' } },
    ],
  }
});
