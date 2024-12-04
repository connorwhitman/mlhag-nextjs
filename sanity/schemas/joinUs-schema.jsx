const joinUsComponent = {
  name: 'joinUs',
  title: 'Join Us',
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
  ]
}

export default joinUsComponent;