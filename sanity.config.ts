import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "zjpjwek5",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2024-01-14",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
  useCdn: true,
})

export default config