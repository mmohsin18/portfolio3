export default {
  name: 'videos',
  type: 'document',
  title: 'Videos',
  fields: [
      {
          name: 'title',
          type: 'string',
          title: 'Video Title'
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name" }
      },
      {
          name: 'content',
          type: 'string',
          title: 'Content'
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
          title: 'Launch Scheduled At',
          name: 'launchAt',
          type: 'datetime'
      },
      {
        name: "url",
        title: "URL",
        type: "url"
      },
  ]
}