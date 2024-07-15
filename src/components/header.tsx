import Image from "next/image";
import logo from "../assets/logo-preto.png";

const Header = () => {
    return (
        <header className="flex w-full justify-around items-center bg-[#111827]">
            <Image src={logo} alt="logo" width={100} height={100} />
            <ul className="flex space-x-12">
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#professional-experience">Professional Experience</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
            </ul>
            <Image src={logo} alt="menu" width={50} height={50} />
        </header>
    );
};

export default Header;