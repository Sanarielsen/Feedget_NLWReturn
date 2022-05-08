import { MailAdapter, SendMailData } from "../mail.adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "a788dae59f8bd2",
      pass: "bb8783a52f0ce7"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    
    async sendMail({ subject, body }: SendMailData) {

        await transport.sendMail( {

            from: 'Equipe Feedget <ola@feedget.com',
            to: 'Samuel Henrique <sanarielsen.dev@gmail.com>',
            subject: subject,
            html: body
        });
    };
}