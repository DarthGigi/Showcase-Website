import { defineConfig } from "astro/config";

// https://astro.build/config
import image from "@astrojs/image";
import alpinejs from "@astrojs/alpinejs";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    image(),
    alpinejs(),
    prefetch(),
    sitemap(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
});
