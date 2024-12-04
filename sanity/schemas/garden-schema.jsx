const gardenPage = {
  name: 'gardenPage',
  title: 'Garden Page',
  type: 'document',

  fields: [

    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string'
    },
    {
      name: 'copy',
      title: 'Page Copy',
      type: 'array',
      of: [{ type: "block" }]
    },
    {
      name: 'gardenPhoto',
      title: 'Garden Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [{
        name: 'alt',
        title: "Alt",
        type: 'string'
      }]
    },
  ]
}

export default gardenPage;