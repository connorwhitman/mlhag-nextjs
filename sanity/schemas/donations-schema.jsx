const donatePage = {
  name: 'donatePage',
  title: 'Donations',
  type: 'document',

  fields: [

    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      
    },
    {
      name: 'donationCopy',
      title: 'Donation Page Copy',
      type: 'array',
      of: [{ type: "block"}]
    },
  ]
}

export default donatePage;