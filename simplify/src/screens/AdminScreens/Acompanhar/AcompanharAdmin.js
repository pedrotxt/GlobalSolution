import Dados from '../../../components/Dados/Dados';
import VerticalHeader from '../../../components/VerticalHeader/VerticalHeader';
import './AcompanharAdmin.css'

const AcompanharAdmin = () => {
    return (
        <>
        <div className='acompanhar-container'>
            <VerticalHeader />
            <div className='acompanhar'>
                <h3 className='consulta' >Consultas Marcadas</h3>
                <Dados />
            </div>
        </div>
        </>
    )
}

export default AcompanharAdmin;