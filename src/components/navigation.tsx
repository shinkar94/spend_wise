'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";

type NavLink = {
    label: string
    href: string
}

type Props = {
    navLinks: NavLink[]
}
export const Navigation = ({navLinks}: Props) =>{
    const pathname = usePathname()
    return(
        <>
            {navLinks.map(link =>{
                const isActive = pathname === link.href
                return(
                    <Link href={link.href} key={link.label} className={isActive ? 'active' : ''}>{link.label}</Link>
                )
            })}
        </>
    )
}