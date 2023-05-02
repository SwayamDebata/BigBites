import { useState } from "react";
import Logo from "../assets/img/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const navLinks = [
{
    title: "Home",
    path: "/",
},
{
    title: "About",
    path: "/about",
},
{
    title: "Instamart",
    path: "/instamart",
},
{
    title: "Contact",
    path: "/contact",
},
{
    title: "Cart",
    path: "/",
},
];

export const Title = () => {
return (
    <Link to="/">
    {" "}
    <img className="logo ml-2.5 w-[100px] h-[100px]" alt={"logo"} src={Logo} />{" "}
    </Link>
);
};

export const NavComponent = () => {
const [isLoggedIn, setIsLoggedIn] = useState(true);
const [menuActive, setMenuActive] = useState(false);
const navigate = useNavigate();


const closeMenu = () => {
    const menu = document.querySelector(".menu-content-container");
    menu.classList.remove("active");
    menu.classList.add("false");
    setMenuActive(!menuActive);
};

return (
    <div className="flex items-center justify-between">
    <div
        className={`menu-content-container flex items-center pr-7  ${
        menuActive && "active"
        }`}
    >
        <ul
        className={` lg:flex xl:flex md:flex items-center pr-5 ${
            !menuActive && "hidden"
        }  ${menuActive && "flex flex-col flex-start "}`}
        >
        {navLinks.map((link, index) => (
            <li key={index} className="p-2.5">
            <Link to={link.path}>
                <button className="nav--btn">{link.title}</button>
            </Link>
            </li>
        ))}
        <li className="p-2.5">
            {isLoggedIn ? (
            <button className="nav--btn" onClick={() => setIsLoggedIn(false)}>
                logout
            </button>
            ) : (
            <button className="nav--btn" onClick={() => navigate("/login")}>
                Login
            </button>
            )}
        </li>
        </ul>
    </div>
    <AiOutlineMenu
        className="lg:hidden xl:hidden md:hidden flex w-[65px] text-base text-blue-dark cursor-pointer "
        onClick={() => {
        console.log("icon");
        closeMenu();
        setMenuActive(!menuActive);
        }}
    />
    </div>
);
};

export const Header = () => {
return (
    <div className="flex justify-between bg-white shadow fixed top-0 left-0 w-full h-[100px] z-50">
    <Title />
    <NavComponent />
    </div>
);
};

export default Header;
