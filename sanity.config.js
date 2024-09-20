import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import globalData from "./sanity/schemas/global-schema";
import homePage from "./sanity/schemas/home-schema";
import events from "./sanity/schemas/events-schema";
import projects from "./sanity/schemas/projects-schema";
import joinUsComponent from "./sanity/schemas/joinUs-schema";


const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

const singletonTypes = new Set(['globalData','home'])

const config = defineConfig({
  projectId: "8g9nl6xc",
  dataset: "production",
  title: "Moffatt-Ladd",
  apiVersion: "2024-08-20",
  basePath: "/admin",

  plugins: [
    structureTool(
      {
        name: 'moffattladd',
        title: 'Moffatt-Ladd',

        structure: (S) =>
          S.list().title("Content").items([
            S.listItem().title("Global Data").id("globalData").child(
              S.document().schemaType("globalData").documentId("globalData")
            ),

            S.listItem().title("Home Page").id("home").child(
              S.document().schemaType("home").documentId("home")
            ),

            // Regular doc types

            S.documentTypeListItem("events").title("Events"),
            S.documentTypeListItem("projects").title("Projects"),
          ]),
      }),
    visionTool(),
  ],

  schema: {
    types: [
      globalData,
      homePage,
      events,
      projects,
    ]
  }
})

export default config;