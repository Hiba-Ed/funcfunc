'use strict'
const Event = use('Event')
const Mail = use('Mail')
//accept object data 
Event.on('sendWelcomeEmail', async data => {
  await Mail.send('emails.thankyou', 
    {
      content: 'Hello, thank you for signing up on our website!'
    },
    message => {
      message.from(data.sender)
      message.to(data.recipient)
      message.subject('Welcome to our Website!')
    }
  )
})