// NPM Imports
const sgMail = require('@sendgrid/mail')


// Set API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'nikochapon@hotmail.com',
    subject: 'Thanks for joining in',
    text: `Welcome to the App ${name}, let me know how you get along with the app.`
  })
}

const sendCancelationMail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'nikochapon@hotmail.com',
    subject: 'Your account was cancelled',
    text: `We \'re sorry to see you leaving. See you soon ${name}!`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationMail
}
