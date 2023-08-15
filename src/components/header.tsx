import {Navigation} from "@/components/navigation";

const navItems = [
    {label: 'Home', href: "/"},
    {label: 'Blog', href: "/blog"},
    {label: 'About', href: "/about"},
]
export const Header = () =>{
    return(
        <header>
            <Navigation navLinks={navItems} />
        </header>
    )
}