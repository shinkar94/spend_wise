import {Navigation} from "@/components/side_bar/navigation";

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