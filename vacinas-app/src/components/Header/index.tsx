import { HeaderBar, Logo, LogoImg, LogoText, UserMenu } from "./style";
import { FaBell, FaCog, FaUserCircle } from "react-icons/fa";
import logoIcon from "../../assets/vaccine-icon.png";

export default function Header() {
    return (
        <HeaderBar>
           <Logo>
            <LogoImg src={logoIcon} alt="Logo do MonitoraVax" />
            <LogoText>MonitoraVax</LogoText>
           </Logo>
            <UserMenu>
                <FaCog/>
                <FaBell/>
                <FaUserCircle/>
            </UserMenu>
        </HeaderBar>
    )
}