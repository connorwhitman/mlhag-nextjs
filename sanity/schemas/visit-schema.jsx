const visitPage = {
  name: 'visitPage',
  title: 'Visit',
  type: 'document',

  fields: [

    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      
    },
    {
      name: 'visitCopy',
      title: 'Visit Us Copy',
      type: 'array',
      of: [{ type: "block"}]
    },
    {
      name: 'hoursCopy',
      title: 'Hours Copy',
      type: 'array',
      of: [{ type: "block"}]
    },
    {
      name: 'pricingCopy',
      title: 'Pricing Copy',
      type: 'array',
      of: [{ type: "block"}]
    },
    {
      name: 'addlCopy',
      title: 'Other Info',
      type: 'array',
      of: [{ type: "block"}]
    },
  ]
}

export default visitPage;