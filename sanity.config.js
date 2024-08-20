import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure';

const config = defineConfig({
  projectId: "8g9nl6xc",
  dataset: "production",
  title: "Moffatt-Ladd",
  apiVersion: "2024-08-20",
  basePath: "/admin",

  plugins: [
    structureTool(),
  ]
})

export default config;