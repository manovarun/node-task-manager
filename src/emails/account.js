const config = require('config');
const sgMail = require('@sendgrid/mail');

const sendEmail = async (email, name) => {
  try {
    sgMail.setApiKey(config.get('sendGridAPIKey'));

    const msg = {
      to: email,
      from: 'hola@varunz.com',
      subject: 'Thanks for joining in!',
      text: 'I hope this one actually get to you.',
      html: `Welcome to the app, ${name}. Let me know how you get along with the app`,
    };

    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
  }
};

const cancelEmail = async (email, name) => {
  try {
    sgMail.setApiKey(config.get('sendGridAPIKey'));

    const msg = {
      to: email,
      from: 'hola@varunz.com',
      subject: 'Account Deleted.!',
      html: `Hi ${name}. Your account has been removed successfully`,
    };

    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendEmail, cancelEmail };
