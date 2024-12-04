const sponsors = {
  name: 'sponsors',
  title: 'Sponsors',
  type: 'document',

  fields: [
    {
      name: 'sponsorName',
      title: 'Sponsor Name',
      type: 'string'
    },
    {
      name: 'sponsorLogo',
      title: 'Sponsor Logo',
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

export default sponsors;