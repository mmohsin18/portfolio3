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
            title: 'Launch Scheduled At',
            name: 'launchAt',
            type: 'datetime'
        },
        {
            title: 'Poster',
            name: 'poster',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            metadata: {
                "dimensions": {
                  "height": 470,
                  "width": 750
                },
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
            title: 'Link',
            name: 'href',
            type: 'url',
            validation: Rule => Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel']
            })
        }
    ]
}