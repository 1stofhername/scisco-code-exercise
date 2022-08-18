import logo from './logo.svg';
import './css/data-card.css';

export default function DataCard ({ allele }) {

    const { accession, name } = allele
    
        return (
            <div className="allele-card">
                <div className='allele-content-container'>
                    <div className='icon-container'>
                        <img src={logo} className="allele-symbol" />
                    </div>
                    <div className='allele-data-container'>
                        <p className='allele-data-text'>{accession}</p>
                        <p className='allele-data-text'>{name}</p>
                    </div>
                </div>
                
            </div>
        )
}