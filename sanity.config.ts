import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "zjpjwek5",
  dataset: "content",
  title: "My Personal Website",
  apiVersion: "2024-01-14",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config