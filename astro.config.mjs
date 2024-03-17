import { defineConfig } from "astro/config"
import react from "@astrojs/react"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://paywave-9uex.onrender.com/",
  integrations: [
    react(),
    tailwind({
      nesting: true,
    }),
  ],
})
