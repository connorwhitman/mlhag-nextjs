const educationPage = {
  name: 'educationPage',
  title: 'Education',
  type: 'document',

  fields: [

    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      
    },
    {
      name: 'aboutEducation',
      title: 'About Our Programs',
      type: 'array',
      of: [{ type: "block"}]
    },
    {
      name: 'groupsCopy',
      title: 'Groups',
      type: 'array',
      of: [{ type: "block"}]
    },
    {
      name: 'schoolsCopy',
      title: 'Schools',
      type: 'array',
      of: [{ type: "block"}]
    },
    {
      name: 'seminarsCopy',
      title: 'Seminars & Speakers',
      type: 'array',
      of: [{ type: "block"}]
    },
    {
      name: 'workshopsCopy',
      title: 'Workshops',
      type: 'array',
      of: [{ type: "block"}]
    },
  ]
}

export default educationPage;