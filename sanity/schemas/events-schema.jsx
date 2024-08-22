const events = {
  name: 'events',
  title: 'Events',
  type: 'document',

  fields: [
    {
      name: 'eventName',
      title: 'Event Name',
      type: 'string'
    },
    {
      name: 'eventDate',
      title: 'Event Date',
      type: 'datetime'
    },
    {
      name: 'eventDetails',
      title: 'Event Details',
      type: 'array',
      of: [{ type: "block" }]
    },
  ]
}

export default events;