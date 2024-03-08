import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://paywave-9uex.onrender.com/",
  integrations: [react()]
});