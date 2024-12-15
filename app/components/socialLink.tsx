import { IconType } from 'react-icons'
import Image from "next/image";

interface SocialLinkProps {
    href: string
    icon: IconType | string
    label: string
}

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 transition-colors hover:text-blue-400`}
        >
            <div className={`w-[300px] h-[50px]  flex items-center gap-2 p-2 rounded-lg border bg-white border-gray-200hover:border-blue-400`}>
                {typeof Icon === 'function' ? <Icon size={30} /> : <Image src={Icon} alt={label} width="30" height="30" unoptimized={true} />}
                <span>{label}</span>
            </div>
        </a>
    )
}
