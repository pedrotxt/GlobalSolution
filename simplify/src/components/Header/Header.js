import './Header.css'

const Header = () => {
    return(
        <header className='header'>
            <a  href="/">
                <img src='./images/icone.png' alt=''/>
            </a>
            <nav className='opcoes'>
                <a href="/">HOME</a>
                <a href="/">SOBRE</a>
                <a href="/servicos">SERVIÇOS</a>
                <a href="/">CONTATO</a>
                <a href="/">LOGIN</a>
            </nav>
        </header>
    )
}

export default Header;