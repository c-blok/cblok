import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, phone, time } = await req.json();

        const transporter = nodemailer.createTransport({
            host: 'mail.inbox.lv',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_LOGIN,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Опции письма
        const mailOptions = {
            from: process.env.EMAIL_LOGIN,
            to: process.env.EMAIL_LOGIN,
            subject: `URGENT | ${name} | ${email}`,
            text: `!!! Новая заявка !!!
            
            Имя - ${name}
            Почта - ${email}
            Телефон - ${phone}
            Желаемое время разговора - ${time ? time : "нету"}
            `,
        };

        // Отправка почты
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: 'Email sent successfully' }), {status: 200});
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Failed to send email' }), {status: 500});
    }
}
