const projects = {
  name: 'projects',
  title: 'Projects',
  type: 'document',

  fields: [
    {
      name: 'projectName',
      title: 'Project Name',
      type: 'string'
    },
    {
      name: 'projectCoverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{
        name: 'alt',
        title: "Alt",
        type: 'string'
      }]
    },
    {
      name: 'projectDetails',
      title: 'Project Details',
      type: 'array',
      of: [{ type: "block" }]
    },
  ]
}

export default projects;