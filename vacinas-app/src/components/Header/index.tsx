import { HeaderBar, Logo, LogoImg, LogoText, UserMenu } from "./style";
import { FaBell, FaCog, FaUserCircle } from "react-icons/fa";
import logoIcon from "../../assets/vaccine-icon.png";

export default function Header() {

    return (
        <HeaderBar>
           <Logo href="/">
            <LogoImg src={logoIcon} alt="Logo do MonitoraVax" />
            <LogoText>MonitoraVax</LogoText>
           </Logo>
            <UserMenu>
                <FaCog onClick={() => window.open('/configuracoes', '_self')}/>
                <FaBell onClick={() => window.open('/mensagens', '_self')}/>
                <FaUserCircle/>
            </UserMenu>
        </HeaderBar>
    )
}