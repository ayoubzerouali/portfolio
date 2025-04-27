import Link from 'next/link';


interface SocialIconProps {

    icon: React.ReactNode;
    href: string;
    label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href, label }) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center
            text-gray-300 hover:text-white cursor-pointer hover:bg-blue-500 transition-colors duration-300"
        >
            {icon}
        </Link>
    );
};

export default SocialIcon;
