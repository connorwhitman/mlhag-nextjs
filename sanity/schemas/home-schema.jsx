const homePage = {
  name: 'home',
  title: 'Home',
  type: 'document',

  fields: [

    {
      name: 'headerAccent',
      title: 'Header Accent Line',
      type: 'string'
    },
    {
      name: 'headerSecond',
      title: 'Header Second Line',
      type: 'string'
    },
    {
      name: 'tagline',
      title: 'Header Tagline',
      type: 'string'
    },
    {
      name: 'aboutHeadline',
      title: 'About Headline',
      type: 'string'
    },
    {
      name: 'aboutContent',
      title: 'About Content',
      type: 'array',
      of: [{ type: "block" }]
    }
  ]
}

export default homePage;