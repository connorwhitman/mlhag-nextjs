const team = {
  name: 'team',
  title: 'Teams',
  type: 'document',

  fields: [
    {
      name: 'name',
      title: 'Staff Name',
      type: 'string'
    },
    {
      name: 'teamBio',
      title: 'Bio',
      type: 'array',
      of: [{ type: "block" }]
    },
    {
      name: 'teamPhoto',
      title: 'Team Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [{
        name: 'alt',
        title: "Alt",
        type: 'string'
      }]
    },
    {
      name: 'whichTeam',
      title: 'Team',
      type: 'string',
      options: {
        list: [
          {title: 'Operations', value: 'operations'},
          {title: 'Garden', value: 'garden'}
        ]
      }
    },
  ]
}

export default team;