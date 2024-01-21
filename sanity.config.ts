import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk"
import { schemaTypes } from "./sanity/schemas";


const config = defineConfig({
    name: 'default',
    title: 'Portfolio Editor',
    basePath: "/admin",

    projectId: 'drfbrkbl',
    dataset: 'production',
    
    plugins: [deskTool()],

    schema: {
        types: schemaTypes,
    },
})


export default config;