const joinUsComponent = {
  name: 'joinUs',
  title: 'Join Us',
  type: 'document',

  fields: [

    {
      name: 'joinUsTitle',
      title: 'Join Us Title',
      type: 'string'
    },
    {
      name: 'joinUsCopy',
      title: 'Join Us Copy',
      type: 'array',
      of: [{ type: "block" }]
    },
  ]
}

export default joinUsComponent;