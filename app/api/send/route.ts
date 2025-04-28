import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({ params }) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Ayoub Zerouali <ayoubxzer@gmail.com>',
            to: ['ayoubzerouali7755@gmail.com'],
            subject: "Form Reception",
            react: EmailTemplate({ firstName: "Ayoub" }) as React.ReactElement,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ data });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
