import logoimg from '../../assets/logo.svg';
import { Content, Container } from './styles';


interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}
export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoimg} alt="dtmoney" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}
