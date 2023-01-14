const { default: test } = require('node:test');
const nodemailer = require('nodemailer');

const sendEmail= async (subject, message, send_to, sent_from, reply_to) => {

    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 587,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const options = {
        from: sent_from,
        to: send_to,
        replyTo: reply_to,
        subject: subject,
        html: message,
    }

    transporter.sendEmail(options, function(error, info){
        if(error) {
            console.log(error);
        }
        console.log(info);
    })
}

module.exports = sendEmail;