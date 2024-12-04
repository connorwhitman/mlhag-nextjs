import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import globalData from "./sanity/schemas/global-schema";
import homePage from "./sanity/schemas/home-schema";
import events from "./sanity/schemas/events-schema";
import projects from "./sanity/schemas/projects-schema";
import sponsors from "./sanity/schemas/sponsors-schema";
import joinUsComponent from "./sanity/schemas/joinUs-schema";
import visitPage from "./sanity/schemas/visit-schema";
import donatePage from "./sanity/schemas/donations-schema";
import gardenPage from "./sanity/schemas/garden-schema";
import educationPage from "./sanity/schemas/education-schema";


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

            S.listItem().title("Home").id("home").child(
              S.document().schemaType("home").documentId("home")
            ),
            S.listItem().title("Visit").id("visitPage").child(
              S.document().schemaType("visitPage").documentId("visitPage")
            ),
            S.listItem().title("Donations").id("donatePage").child(
              S.document().schemaType("donatePage").documentId("donatePage")
            ),
            S.listItem().title("The Garden").id("gardenPage").child(
              S.document().schemaType("gardenPage").documentId("gardenPage")
            ),
            S.listItem().title("Education").id("educationPage").child(
              S.document().schemaType("educationPage").documentId("educationPage")
            ),

            // Regular doc types

            S.documentTypeListItem("events").title("Events"),
            S.documentTypeListItem("projects").title("Projects"),
            S.documentTypeListItem("sponsors").title("Sponsors"),
          ]),
      }),
    visionTool(),
  ],

  schema: {
    types: [
      globalData,
      homePage,
      visitPage,
      gardenPage,
      donatePage,
      educationPage,
      events,
      projects,
      sponsors,
    ]
  }
})

export default config;