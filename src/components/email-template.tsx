
interface EmailTemplateProps {
    name: string;

}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name }) => (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
        <h1 style={{ color: '#0070f3' }}>Thank You, {name}!</h1>
        <p>
            I appreciate you reaching out through my portfolio. Your message has been received, and I&apos;ll get back to you as soon as possible.
        </p>
        <p>
            In the meantime, feel free to explore more about my work or connect with me on social media.
        </p>
        <p>Best regards,<br />Ayoub</p>
    </div>
);

export default EmailTemplate;

