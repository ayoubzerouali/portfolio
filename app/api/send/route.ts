import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name } = await request.json();
        //const { name
        //    //, email, subject, message
        //} = body;

        const { data, error } = await resend.emails.send({
            from: 'Ayoub Zerouali <onboarding@resend.dev>',
            to: ['ayoubzerouali7755@gmail.com'],
            subject: "Form Reception",
            react: EmailTemplate({ name }) as React.ReactElement,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ data });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
