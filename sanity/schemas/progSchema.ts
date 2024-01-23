export default {
    name: 'projects',
    type: 'document',
    title: 'Programming',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Project Title'
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: { source: "name" }
        },
        {
            title: 'Launch Scheduled At',
            name: 'launchAt',
            type: 'datetime'
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string"
            }
          ]
        },
        {
            name: 'content',
            type: 'string',
            title: 'Content'
        },
        {
            name: 'language',
            type: 'string',
            title: 'Used Language'
        },
        {
          name: "url",
          title: "URL",
          type: "url"
        },
    ]
}