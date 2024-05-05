import nodemailer from 'nodemailer';

class MailService {
    async sendMail(to: string, subject: string, text: string) {
       const user = 'fag.gurgel@gmail.com';

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'fag.gurgel@gmail.com',
                pass: 'ebtq nrcb ndtd vfkj'
            }
        });

        const mailOptions = {
            from: user,
            to: to,
            subject: subject,
            text: text
        };

        const sentMessageInfo = await transporter.sendMail(mailOptions);
        return sentMessageInfo;
    }
}

export default new MailService();