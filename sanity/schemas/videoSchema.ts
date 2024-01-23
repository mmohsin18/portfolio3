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
              title: 'Slug',
              name: 'slug',
              type: 'slug',
              options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                                     .toLowerCase()
                                     .replace(/\s+/g, '-')
                                     .slice(0, 200)
              }
      },
      {
          name: 'content',
          type: 'string',
          title: 'Content'
      },
      {
          title: 'Poster',
          name: 'poster',
          type: 'image',
          options: {
            hotspot: true // <-- Defaults to false
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'attribution',
              type: 'string',
              title: 'Attribution',
            }
          ]
      },
      {
          title: 'Launch Scheduled At',
          name: 'launchAt',
          type: 'datetime'
      },
      {
          title: 'Link',
          name: 'href',
          type: 'url',
          validation: Rule => Rule.uri({
            scheme: ['http', 'https', 'mailto', 'tel']
          })
      }
  ]
}