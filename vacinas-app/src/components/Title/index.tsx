import { TitleText } from "./style";

type Props = {
    children : string;
}

function Title({children} : Props){
    return (
        <TitleText>{children}</TitleText>
    )
}

export default Title;