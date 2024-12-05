const aboutPage = {
  name: 'aboutPage',
  title: 'About',
  type: 'document',

  fields: [

    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      
    },
    {
      name: 'aboutCopy',
      title: 'About Copy',
      type: 'array',
      of: [{ type: "block"}]
    },
    {
      name: 'aboutIntro',
      title: 'Introduction',
      type: 'array',
      of: [{ type: "block"}]
    },
    {
      name: 'aboutMoffatts',
      title: 'Moffatt Copy',
      type: 'array',
      of: [{ type: "block"}]
    },
    {
      name: 'aboutWhipples',
      title: 'Whipple Copy',
      type: 'array',
      of: [{ type: "block"}]
    },
    {
      name: 'aboutLadds',
      title: 'Ladd Copy',
      type: 'array',
      of: [{ type: "block"}]
    },
  ]
}

export default aboutPage;