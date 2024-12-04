const nscda = {
  name: 'nscda',
  title: 'NSCDA',
  type: 'document',

  fields: [

    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'copy',
      title: 'Copy',
      type: 'array',
      of: [{ type: "block" }]
    },
    {
      name: 'nscdaGroupPhoto',
      title: 'NSCDA Group Photo',
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

export default nscdaComponent;