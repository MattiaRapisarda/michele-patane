import { MessageCircle } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

type SocialLinksProps = {
    instagram: string;
    facebook: string;
    whatsapp: string;
    className?: string;
};

export function SocialLinks({
    instagram,
    facebook,
    whatsapp,
    className = "",
}: SocialLinksProps) {
    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <a href={instagram} className="hover:text-white">
                <FaInstagram className="h-4 w-4" />
            </a>
            <a href={facebook} className="hover:text-white">
                <FaFacebookF className="h-4 w-4" />
            </a>
            <a href={whatsapp} className="hover:text-white">
                <MessageCircle className="h-4 w-4" />
            </a>
        </div>
    );
}