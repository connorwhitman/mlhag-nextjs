const globalData = {
  name: 'globalData',
  title: 'Global Data',
  type: 'document',

  groups: [
    {
      name: 'social',
      title: 'Social Media Links',
    },
  ],

  fields: [
    {
      name: 'orgName',
      title: 'Organization Name',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'housePhone',
      title: 'House Phone',
      type: 'string'
    },
    {
      name: 'officePhone',
      title: 'Office Phone',
      type: 'string'
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string'
    },
    {
      name: 'facebookLink',
      title: 'Facebook',
      type: 'url',
      group:'social'
    },
    {
      name: 'instagramLink',
      title: 'Instagram',
      type: 'url',
      group:'social'
    },
    {
      name: 'linkedinLink',
      title: 'LinkedIn',
      type: 'url',
      group:'social'
    },
    {
      name: 'youtubeLink',
      title: 'YouTube',
      type: 'url',
      group:'social'
    }
  ]
}

export default globalData;