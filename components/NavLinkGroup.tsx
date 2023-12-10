import NavLink from "./NavLink"


const NavLinksGroup: React.FC<NavLinksGroupProps> = ({linksArr}) => {

    return (
        <nav>
            <ul className="hidden lg:flex gap-8">
                {linksArr.map((item, idx) => (
                    <li key={idx}>
                        <NavLink text={item.text} path={item.path} />
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavLinksGroup