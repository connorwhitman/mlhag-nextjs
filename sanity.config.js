import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import globalData from "./sanity/schemas/global-schema";
import homePage from "./sanity/schemas/home-schema";
import events from "./sanity/schemas/events-schema";
import projects from "./sanity/schemas/projects-schema";
import joinUsComponent from "./sanity/schemas/joinUs-schema";

const config = defineConfig({
  projectId: "8g9nl6xc",
  dataset: "production",
  title: "Moffatt-Ladd",
  apiVersion: "2024-08-20",
  basePath: "/admin",

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: [
      globalData,
      homePage,
      events,
      projects,
    ],
  }
})

export default config;