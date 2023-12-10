import Link from "next/link"


const NavLink: React.FC<NavLinkProps> = ({text, path}) => {

    return (
        <Link href={path} className="text-body1-1 text-white">{text}</Link>
    )
}

export default NavLink;